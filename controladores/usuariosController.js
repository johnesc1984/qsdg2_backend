var usuariosModel = require("../modelos/usuariosModel").usuarios


var usuariosController = {}

usuariosController.Guardar = function(request,response){

    var post = {
        nombre:request.body.nombre
    }

    if(post.nombre == undefined || post.nombre == null || post.nombre == ''){
        response.json({state:false,mensaje:'el campo nombre es obligatorio'})
        return;
    }

    usuariosModel.Guardar(post,function(respuesta){
        response.json(respuesta)
    })



}


module.exports.usuarios = usuariosController