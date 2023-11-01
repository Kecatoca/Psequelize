const express = require('express')

const router = require('./routes/cliente.router')

const app = express();

app.set('view engine','ejs') 

app.use('/public',express.static('public'));

app.get('/',function(req,res){    
    res.render('index');   
});

app.use('/v1',router)

module.exports =app;