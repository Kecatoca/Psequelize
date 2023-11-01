const router = require("express").Router()

router.get('/clientes',function(req,res){    
    res.render('page3');   
});

router.post('/clientes',function(req,res){    
    res.render('page3');   
});

router.put('/clientes',function(req,res){    
    res.render('page3');   
});

router.delete('/clientes',function(req,res){    
    res.render('page3');   
});

module.exports = router;