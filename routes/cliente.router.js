const router = require("express").Router()
const controller = require('../controllers/clientes.control')

router.get('/clientes',controller.clientes)

// router.get('/clientes',function(req,res){    
//     res.render('page3');   
// });

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