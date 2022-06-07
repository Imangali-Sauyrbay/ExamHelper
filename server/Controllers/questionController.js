const db = require('./../DB');

class Controller {

  async getAll(req, res) {
    try {
      if(req.body.pass !== process.env.PASS) return res.status(403).json({message: 'Неправильный пароль'});
      await db.deleteOlderRecords('questions', 30);
      let [rows] = await db.query(`SELECT * FROM questions ORDER BY asked_at DESC;`);
      await db.withAnswers(rows);

      res.status(200).json(rows);
    } catch (error) {
      console.error(error);
      res.status(500).json([{title: 'Ошибка сервера!'}]);
    }
  }
}

module.exports = new Controller();