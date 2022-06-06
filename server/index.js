const exp = require('express');
const bodyParser = require('body-parser');
const getController = require('./Controllers/getAnswerController');
const setController = require('./Controllers/setAnswerController');
const path = require('path');

const app = exp();
app.use(exp.static('public'))

app.use(bodyParser.raw());
app.use(bodyParser.json());

app.get('/',(req,res)=>{
  res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'))
});

app.get('/add',(req,res)=>{
  const pass = req.query.pass;

  if(pass !== '134679') return res.sendFile(path.resolve(__dirname, '..', 'public', 'notpermitted.html'));
  res.sendFile(path.resolve(__dirname, '..', 'public', 'add.html'));
});

app.post('/add', setController.addNew);

app.post('/match', getController.getMatch);

app.post('/getAll/:id', getController.getAll);

const port = process.env.PORT;

app.listen(port || 3300,()=>{
    console.log('Server has start on port 3300');
});