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

app.post('/match',(req,res)=>{
  const {text} = req.body;
  const arr = [];
  firstLevel.forEach(el=>{
    if(el.title.includes(text)) arr.push(el);
  })
  secondLevel.forEach(el=>{
    if(el.title.includes(text)) arr.push(el);
  })
  thirdLevel.forEach(el=>{
    if(el.title.includes(text)) arr.push(el);
  })
  res.json(arr);
})

app.post('/getAll/:id', (req,res)=>{
  switch(req.params.id){
    case '1':
      return res.json(firstLevel);
    case '2':
      return res.json(secondLevel);
    case '3':
      return res.json(thirdLevel);
  }
})

const port = process.env.PORT;

app.listen(port || 3300,()=>{
    console.log('Server has start on port 3300');
})