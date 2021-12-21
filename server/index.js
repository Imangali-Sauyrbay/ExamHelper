const exp = require('express');
const bodyParser = require('body-parser');
const controller = require('./Controllers/getAnswerController');

const app = exp();
app.use(exp.static('public'))
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.raw());
app.use(bodyParser.json());

app.get('/',(req,res)=>{
  res.sendFile(path.resolve('index.html'))
})


app.post('/match', controller.getMatch)

app.post('/getAll/:id', controller.getAll)

const port = process.env.PORT;

app.listen(port || 3300,()=>{
    console.log('Server has start on port 3300');
})