const path = require('path');
const pasteCode = require(path.resolve(__dirname, '..', 'Answers', 'pasteCode'));
const db = require('./../DB');

const getErrorMessage = e => [{
  title: 'Error!',
  answer: e.message + '; Попробуй перезагрузить страницу!'
}];

const getMatches = async (text) => {
  let matches = [];
  const sql = word => `
  SELECT * FROM answers WHERE
  title LIKE '%${word}%'
  OR answer LIKE '%${word}%';
  `;

  const query = db._connection.escape(text.trim()).replace(/^'|'$/gim, '');

  const [globalMatches] = await db.query(sql(query));

  matches = matches.concat(globalMatches);

  const words = query.split(/\s+/);
  if(words.length > 1) {
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if(word.length < 3) continue;
      
      const [wordMatch] = await db.query(sql(word));
      matches = matches.concat(wordMatch);
    }
  }
  

  const result = matches
  .reduce((acc, item) => {
    if(acc.some(el => el.title == item.title && el.answer == item.answer)) {
      return acc;
    }

    acc.push(item);
    return acc;
  }, []);

  return result;
}

const highLight = (str, regex) => str.replace(regex, value => `<span class="hl">${value}</span>`);

const markMatches = (text, arr = []) => arr.map((row) => {
  const globalRegex = new RegExp(text, 'gi');
  row.title = highLight(row.title, globalRegex);
  row.answer = highLight(row.answer, globalRegex);

  const words = text.split(/\s+/);
  if(words.length <= 1) return row;

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    const regex = new RegExp(word, 'gi');

    row.title = highLight(row.title, regex);
    row.answer = highLight(row.answer, regex);

  }

  return row;
});

class Controller{

  async asked(req, res) {
    try {
      await db.deleteOlderRecords('questions', 30);
      
      const query = String(req.body.query).trim();
      if(query.toLowerCase() === '') {
        const [rows] = await db.query('SELECT * FROM `questions`');
        await db.withAnswers(rows);
        return res.json(rows);
      }

      const forfind = db._connection.escape(query.trim()).replace(/^'|'$/gim, '');
      const [rows] = await db.query(`SELECT * FROM questions WHERE question LIKE '%${forfind}%'`);
      await db.withAnswers(rows);


      const regex = new RegExp(query, 'gi');
      for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        row.question = highLight(row.question, regex);
      }

      res.json(rows);

    } catch (error) {
      console.error(error);
      res.status(500).json({message: 'Ошибка сервера!'});
    }
  }

  async getMatch(req,res){
    try{
      const text = String(req.body.text).trim();

      switch(text.toLowerCase()) {
        case '':
          const [rows] = await db.query('SELECT * FROM `answers`');
          return res.json(rows);
        case '/p':
          return res.json(pasteCode);
      }

      const matches = markMatches(text, await getMatches(text));
      if(matches.length === 0) matches.push({title: 'Нет Совпадений!', answer: 'Попробуйте искать каждый слог отдельно!'});
  
      res.json(matches);
    } catch(e){
      res.json(getErrorMessage(e));
    }
  }
}

module.exports = new Controller();
