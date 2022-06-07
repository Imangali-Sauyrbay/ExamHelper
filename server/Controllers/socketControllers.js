const { Server } = require("socket.io");
const db = require('./../DB');


module.exports = function(httpServer) {
  const io = new Server(httpServer);
  
  io.on('connection', socket => {
    socket.on('answered', async ({question_id, answered_by, answer}) => {
      const time = new Date()
      await db.insert('question_answers', ['answer', 'answered_by', 'created_at', 'question_id'], [answer, answered_by, time, question_id])
      const [rows] = await db.query('SELECT * FROM question_answers WHERE question_id = ' + question_id + ';');

      io.emit('update_answers', {id: question_id, answers: rows});
    });
  });

  db.getConnection().then(conn => conn.on('question_asked', async (id) => {
    let [rows] = await db.query(`SELECT * FROM questions WHERE id = ${id};`);

    await db.withAnswers(rows);

    io.emit('add_answer', rows[0]);
  }))
}