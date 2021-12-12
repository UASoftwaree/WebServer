const express = require("express");
const app = express();

const publicPath = "/public"

//404 Webpage

//Webserver Redirect
app.get('/sponsor',(req,res)=>res.redirect("https://daulric.tk"))


//Accessing Files without the use of extentions
app.get('',(req,res)=>res.sendFile(__dirname + publicPath + "/index.html"))
app.get('/hello',(req,res)=>res.sendFile(__dirname + publicPath + "/hello.html"))

//404 Webpage
app.use(express.static(__dirname + "/public"), (_, res, next) => {
  res.status(404)
  res.sendFile(__dirname + publicPath + "/404.html")
});

app.listen(8080);