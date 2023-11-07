//Las aplicaciones escritas en JS son modulares
//El controlador es el intermediario entre un modelo y una vista
//El controlador recibe las peticiones HTTP y les da respuesta.

const controller =  {}

controller.clientes = function(req,res){    
    res.render('page3');
}

module.exports = controller