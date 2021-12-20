const exp = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const firstLevel = require('./firstLevel');
const secondLevel = require('./secondLevel');
const thirdLevel = require('./thirdLevel');

const app = exp();
app.use(exp.static('public'))
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.get('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'))
})

const isIn = (first, second) => first.toLowerCase().includes(second.toLowerCase());

app.post('/match',(req,res)=>{
  try{
    const text = `${req.body.text}`;
    const arr = [];
    if(!text.trim()) return res.json(arr);
    firstLevel.forEach(el=>{
      if(isIn(el.title, text)) arr.push(el);
    })
    secondLevel.forEach(el=>{
      if(isIn(el.title, text)) arr.push(el);
    })
    thirdLevel.forEach(el=>{
      if(isIn(el.title, text)) arr.push(el);
    })

    if(arr.length === 0) arr.push({title: 'Нет Совпадений!', answer: 'Попробуйте искать каждое слог отдельно!'});

    res.json(arr);
  } catch(e){
    res.json([{
      title: 'Error!',
      answer: e.message
    }])
  }
})

app.post('/getAll/:id', (req,res)=>{
  try{
    switch(req.params.id){
      case '1':
        return res.json(firstLevel);
      case '2':
        return res.json(secondLevel);
      case '3':
        return res.json(thirdLevel);
    }

    return res.json([{
      title: 'No Answer!',
      answer: 'Try again!'
    }])
  } catch(e){
    res.json([{
      title: 'Error!',
      answer: e.message
    }])
  }
})

const port = process.env.PORT;

app.listen(port || 3300,()=>{
    console.log('Server has start on port 3300');
})