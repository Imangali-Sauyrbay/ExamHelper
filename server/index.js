const exp = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { createServer } = require('http');

require('dotenv').config({path: path.resolve(__dirname, '..', '.env')});

const getController = require('./Controllers/getAnswerController');
const setController = require('./Controllers/setAnswerController');
const questionsController = require('./Controllers/questionController');
const socketControllers = require('./Controllers/socketControllers');


const app = exp();
app.use(exp.static('public'))

app.use(bodyParser.raw());
app.use(bodyParser.json());

app.get('/',(req,res)=>{
  res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'))
});

app.get('/add',(req,res)=>{
  const pass = req.query.pass || '';
  console.log(pass, process.env.PASS);
  if(pass !== process.env.PASS) return res.sendFile(path.resolve(__dirname, '..', 'public', 'notpermitted.html'));
  res.sendFile(path.resolve(__dirname, '..', 'public', 'add.html'));
});

app.get('/answer',(req,res)=>{
  const pass = req.query.pass || '';

  if(pass !== process.env.PASS) res.sendFile(path.resolve(__dirname, '..', 'public', 'notpermitted.html'));
  else res.sendFile(path.resolve(__dirname, '..', 'public', 'answer.html'));
});

app.get('*', (req, res) => res.send('<h1 style="text-align:center; margin-top: 20px;">Страница не найдена!</h1>'));
app.post('/getquestions', questionsController.getAll);

app.post('/add', setController.addNew);
app.post('/ask', setController.ask);
app.post('/match', getController.getMatch);
app.post('/asked', getController.asked);

const port = process.env.PORT;
const httpServer = createServer(app);
socketControllers(httpServer);

httpServer.listen(port || 3300,()=>{                
    console.log('Server has start on port ' + port);
});