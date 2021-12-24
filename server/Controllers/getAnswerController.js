const path = require('path');
const firstLevel = require(path.resolve(__dirname, '..', 'Answers', 'firstLevel'));
const pasteCode = require(path.resolve(__dirname, '..', 'Answers', 'pasteCode'));


const answers = [firstLevel];

const isIn = (first, second) => first.toLowerCase().includes(second.toLowerCase());
const getErrorMessage = e => [{
  title: 'Error!',
  answer: e.message + '; Попробуй перезагрузить страницу!'
}]

class Controller{

  async getMatch(req,res){
    try{
      const text = `${req.body.text}`;
      if(!text.trim()) return res.json([{title: 'Пустой запрос!', answer: ''}]);

      if(text.toLowerCase() === '/all')
        return res.json(answers.reduce((acc, el) => acc.concat(el),[]));
      else if(text.toLowerCase() === '/p')
        return res.json(pasteCode);

      const matches = [];
  
      answers.forEach(arr => arr.forEach(el=>{
        if(isIn(el.title, text)) matches.push(el);
      }))
  
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
