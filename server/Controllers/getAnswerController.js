const path = require('path');
const pasteCode = require(getPath('pasteCode'));

function getPath(file, folder = '') {
  return path.resolve(__dirname, '..', 'Answers', folder, file);
}

const answers = [...require(getPath('it-infrastructure.js'))];

const getErrorMessage = e => [{
  title: 'Error!',
  answer: e.message + '; Попробуй перезагрузить страницу!'
}];

const getMatches = (text, arr = []) => {
  const globalMatches = [];
  const wordMathces = [];

  arr.forEach(({title}) => {
    title = title.trim();

    const globalRegex = new RegExp(text, 'gi');
    if(title.match(globalRegex)) globalMatches.push({title, answer});

    const words = text.split(/\s+/);
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if(word.length < 3) continue;
  
      const regex = new RegExp(word, 'gi');
      
      if(title.match(regex)) wordMathces.push({title, answer});
    }
  });

  const result = [...globalMatches, ...wordMathces]
  .reduce((acc, item) => {
    if(acc.some(el => el.title == item.title && el.answer == item.answer)) {
      return acc;
    }

    acc.push(item);
    return acc;
  } ,[]);

  return result
}

const highLight = (str, regex) => str.replace(regex, value => `<span class="hl">${value}</span>`);

const markMatches = (text, arr = []) => arr.map(({title, answer}) => {
  const globalRegex = new RegExp(text, 'gi');
  title = highLight(title, globalRegex);
``
  const words = text.split(/\s+/);
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if(word.length < 3) continue;

    const regex = new RegExp(word, 'gi');
    
    title = highLight(title, regex);
  }

  return {title, answer};
});

class Controller{

  async getMatch(req,res){
    try{
      const text = String(req.body.text).trim();

      if(!text) return res.json([{title: 'Пустой запрос!', answer: ''}]);

      if(text.startsWith('/')){
        switch(text.toLowerCase()) {
          case '/all':
            return res.json(answers);
          case '/p':
            return res.json(pasteCode);
        }
      }

      const matches = markMatches(text, getMatches(text, answers));
      if(matches.length === 0) matches.push({title: 'Нет Совпадений!', answer: 'Попробуйте искать каждый слог отдельно!'});
  
      res.json(matches);
    } catch(e){
      res.json(getErrorMessage(e));
    }
  }

  async getAll(req,res){
    try{
      const i = +req.params.id;
      if(!isNaN(i) && i < answers.length)
        return res.json(answers[i]);

      return res.json([{
        title: 'Не удалось наити ответы!',
        answer: `Не удалось использовать индекс ${i} для получения ответа из массива длиной: ${answers.length - 1}. Попробуйте искать через поиск!`
      }]);
    } catch(e){
      res.json(getErrorMessage(e));
    }
  }
}

module.exports = new Controller();
