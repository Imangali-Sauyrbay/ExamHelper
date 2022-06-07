const db = require('./../DB');

class Controller{
  async addNew(req, res) {
    try {
      if(req.body.pass !== process.env.PASS) return res.status(403).json({message: 'Неправильный пароль'});

      const title = String(req.body.title).trim();
      const answer = String(req.body.answer).trim();
      const time = new Date();

      await db.insert('answers', ['title', 'answer', 'created_at'], [title, answer, time]);
      res.status(201).json({message: 'Успешно добавлено!'});
    } catch (error) {
      console.error(error);
      res.status(500).json({message: 'Ошибка сервера!'});
    }
  }

  async ask(req, res) {
    try {
      const question = String(req.body.question).trim();
      if(!question) return res.status(400).json([{title: 'Пустой вопрос!', answer: ''}]);
      const time = new Date();

      const [{insertId}] = await db.insert('questions', ['question', 'asked_at'], [question, time]);
      db.getConnection().then(conn => conn.emit('question_asked', insertId));

      res.status(201).json([{title: 'Вопрос успешно добавлено!', answer: ''}]);
    } catch (error) {
      console.error(error);
      res.status(500).json([{title: 'Ошибка сервера!', answer: ''}]);
    }
  }

}

module.exports = new Controller();