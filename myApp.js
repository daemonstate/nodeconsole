let express = require('express');
require('dotenv').config();
let app = express();
console.log("Hello World");
app.use((req,res,next)=>{
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
})
app.get('/now', (req,res,next)=>{
  req.time = new Date().toString();
  next();
}, function(req,res){
  res.send({time: req.time});
})
app.get('/', (req, res) => {
  absolutePath = __dirname+"/views/index.html";
  res.sendFile(absolutePath);
  
});
app.get('/json',(req,res)=>{
  if(process.env.MESSAGE_STYLE==='uppercase'){
    var response = "Hello json";
    console.log("yes");
    response = "Hello json".toUpperCase();
  }else {
    console.log();
    response = "Hello json";
  }
res.json({"message": response});
});
app.get('/:word/echo',(req,res,next)=>{
  res.send({echo: req.params.word});
  next();
})
app.get('/name',(req,res,next)=>{
  res.send({name: req.query.first + " " + req.query.last});
  next();
})
pathforcss = __dirname+'/public';
app.use("/public",express.static(pathforcss));

































 module.exports = app;
