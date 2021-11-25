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

usuariosController.Listar = function(request,response){
   
    usuariosModel.Listar(null,function(respuesta){
        response.json(respuesta)
    })
}

usuariosController.ListarId = function(request,response){
   
    var post = {
        id:request.body.id
    }

    if(post.id == undefined || post.id == null || post.id == ''){
        response.json({state:false,mensaje:'el campo id es obligatorio'})
        return;
    }

    usuariosModel.ListarId(post,function(respuesta){
        response.json(respuesta)
    })
}

usuariosController.Actualizar = function(request,response){

    var post = {
        nombre:request.body.nombre,
        id:request.body.id
    }

    if(post.nombre == undefined || post.nombre == null || post.nombre == ''){
        response.json({state:false,mensaje:'el campo nombre es obligatorio'})
        return;
    }

    if(post.id == undefined || post.id == null || post.id == ''){
        response.json({state:false,mensaje:'el campo id es obligatorio'})
        return;
    }

    usuariosModel.Actualizar(post,function(respuesta){
        
        if(respuesta.state == true){
            response.json({state:true,mensaje:'Usuario Se Actualizo correctamente'})
        }
        else{
            response.json({state:false,mensaje:'Se presento un Error al Actualizar ',info:respuesta.info})
        }
       
    })

}

usuariosController.Eliminar = function(request,response){

    var post = {
        id:request.body.id
    }

    if(post.id == undefined || post.id == null || post.id == ''){
        response.json({state:false,mensaje:'el campo id es obligatorio'})
        return;
    }

    usuariosModel.Eliminar(post,function(respuesta){
        if(respuesta.state == true){
            response.json({state:true,mensaje:'Usuario Se Elimino correctamente'})
        }
        else{
            response.json({state:false,mensaje:'Se presento un Error al Eliminar ',info:respuesta.info})
        }

    })


}


module.exports.usuarios = usuariosController