let express = require('express');
require('dotenv').config();
let app = express();
console.log("Hello World");
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
pathforcss = __dirname+'/public';
app.use("/public",express.static(pathforcss));

































 module.exports = app;
