const db = require('./../DB');

class Controller{
  async addNew(req, res) {
    try {
      if(req.body.pass !== '134679') return res.status(403).json({message: 'Неправильный пароль'});

      const title = String(req.body.title).trim();
      const answer = String(req.body.answer).trim();
      const time = new Date().toISOString().slice(0, 19).replace('T', ' ');

      await db.query(`INSERT INTO answers (title, answer, created_at) VALUES ('${title}', '${answer}', '${time}')`);
      res.status(201).json({message: 'Успешно добавлено!'});
    } catch (error) {
      console.error(error);
      res.status(500).json({message: 'Ошибка сервера!'});
    }
  }

  async deleteOne(req, res) {

  }

}

module.exports = new Controller();