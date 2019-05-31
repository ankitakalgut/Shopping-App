const express=require('express')
const router=express.Router();
const Ninja = require('./model/user');
//const app = require('./app.js');
const f=require('./app.js')
// const url=require('./app.js')
// add a new ninja to the db  
router.post('/ninjas', function(req,res,next)
{      //var user=new user(req.body)
     Ninja.create(req.body).then (function(ninja)
    {
         //res.send (ninja);
         res.sendFile(__dirname +"/public/login.html");
    })
     //console.log(req.body.name)
    //res.sendFile(__dirname +"/public/index.html");
    //res.send("save");
 })
//user login
router.post('/ninjas/login',function(req,res,next)
{
    var userName=req.body.username;
    var query = { email: userName };
    Ninja.find(query).exec().then(function(ninja)
        {
            if(ninja.length>=1)
            {
                if(ninja.email!=userName)
                res.sendFile(__dirname +"/public/products.html");
            }
            else
            {   
                res.send("Not found");
            }
           
        })
        .catch(err=>
        {
                res.send(" item not found")
        });
})
 
 
 // find a note
router.get('/ninjas/:name',function(req, res,next)
{
  
   Ninja.findById({_id:req.params.name}).then(function(ninja)
    {
        res.send(ninja);
    })
    .catch(err=>
    {
            res.send(" item not found")
    });
})


//delete a note
router.delete('/ninjas/:name',function(req,res,next)
{
    Ninja.findByIdAndRemove({_id:req.params.name}).then(function(ninja)
    {
        res.send("note deleted");
    }).catch(err=>
    {
 
        res.send(" item not found")   
    })
    })


// //user login
// router.post('/ninjas/login',function(req,res,next)
// {
//     var username=req.body.username;
//     Ninja.find().select('')
//   {
//     res.send("found");
// })
// .catch(err=>
//     {
//         res.send("not")
//     })
// })

 
module.exports = router;
