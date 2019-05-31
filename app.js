const express=require('express')
const app=express()
const router=require('./router.js')
var fs=require('fs')
const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/mongo')
 mongoose.Promise=global.Promise
// var MongoClient = require('mongodb').MongoClient;
// var url = 'mongodb://localhost:27017/mys';
const bodyParser=require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./public/welcome.html'))
const morgan =require('morgan');
app.use(morgan('short'));






// get a list of ninjas from the db

app.use('/api', require('./router.js'));

app.get("/", (req, res) => 
{
  
     res.sendFile(__dirname + "/public/products.html");
  // res.sendFile(__dirname + "/public/images/img.png");
});


 app.get("/images/Tulips.jpg", (req, res) => 
 {
  
 res.sendFile(__dirname + "/public/images/Tulips.jpg");
});


app.get("/index", (req, res) => 
{
    res.sendFile(__dirname + "/public/index.html");
});


app.get("/login", (req, res) => 
{
    res.sendFile(__dirname + "/public/login.html");
});

app.get("/products", (req, res) => 
{
    res.sendFile(__dirname + "/public/products.html");
});
// e
// error handling middleware
app.use(function(err, req, res, next){
//console.log(err); // to see properties of message in our console
    res.status(422).send({error: err.message});
});

app.listen(5000,()=>
{
    console.log("We are connected to server")
})

module.exports=app;
module.mongoose=mongoose;
module.exports=router
//module.exports=url
