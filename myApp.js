let express = require('express');
require('dotenv').config();
let app = express();
console.log("Hello World");
app.get('/', (req, res) => {
  absolutePath = __dirname+"/views/index.html";
  res.sendFile(absolutePath);
  
});
app.get('/json',(req,res)=>{
  if (process.env.MESSAGE_STYLE == 'uppercase'){
    res.json({"message": "HELLO JSON"});
  }else {
    res.json({"message": "Hello json"});
  }
});
pathforcss = __dirname+'/public';
app.use("/public",express.static(pathforcss));

































 module.exports = app;
