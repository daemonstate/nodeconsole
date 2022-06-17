let express = require('express');
let app = express();
console.log("Hello World");
app.get('/', (req, res) => {
  absolutePath = __dirname+"/views/index.html";
  res.sendFile(absolutePath);
  
});
app.get('/json',(req,res)=>{
  res.json({"message": "Hello json"});
});
pathforcss = __dirname+'/public';
app.use("/public",express.static(pathforcss));

































 module.exports = app;
