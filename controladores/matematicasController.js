var matematicasModel  = require("../modelos/matematicasModel").matematicas;


var matematicasController = {};

matematicasController.sumar = function(request,response){

    var post = {
        valor1:parseInt(request.body.valor1),
        valor2:parseInt(request.body.valor2)
    }

    console.log(post)

    if(post.valor1 == undefined || post.valor1 == null || post.valor1 == '' || isNaN(post.valor1)){
        response.json({state:false,mensaje:'el campo valor1 es obligatorio'})
        return;
    }

    if(post.valor2 == undefined || post.valor2 == null || post.valor2 == '' || isNaN(post.valor2)){
        response.json({state:false,mensaje:'el campo valor2 es obligatorio'})
        return;
    }

   
    matematicasModel.guardarenusuarios(post,function(respuesta){
        response.json(respuesta)
    })

   

}



module.exports.matematicas = matematicasController