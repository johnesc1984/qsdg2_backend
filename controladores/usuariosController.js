var usuariosModel = require("../modelos/usuariosModel").usuarios


var usuariosController = {}

usuariosController.Guardar = function(request,response){

    var post = {
        nombre:request.body.nombre,
        email:request.body.email,
        password:sha256(request.body.password + config.secretpassword),
        confirmar:sha256(request.body.confirmar + config.secretpassword)
    }

    if(post.nombre == undefined || post.nombre == null || post.nombre == ''){
        response.json({state:false,mensaje:'el campo nombre es obligatorio'})
        return;
    }

    if(post.email == undefined || post.email == null || post.email == ''){
        response.json({state:false,mensaje:'el campo email es obligatorio'})
        return;
    }

    if(request.body.password == undefined || request.body.password == null || request.body.password == ''){
        response.json({state:false,mensaje:'el campo password es obligatorio'})
        return;
    }

    if(request.body.confirmar == undefined || request.body.confirmar == null || request.body.confirmar == ''){
        response.json({state:false,mensaje:'el campo confirmar es obligatorio'})
        return;
    }

    if(post.password != post.confirmar){
        response.json({state:false,mensaje:'el campo confirmar y password no coinciden'})
        return;
    }

    console.log(post)

    usuariosModel.Guardar(post,function(respuesta){
       
        if(respuesta.state == true){
            response.json({state:true,mensaje:'Usuario Creado Correctamente'})
        }
        else{
            response.json({state:false,mensaje:'Error al Crear Usuario'})
        }
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

usuariosController.Login = function(request,response){
    var post = {
       email:request.body.email,
       password:sha256(request.body.password + config.secretpassword)
    }

    if(post.email == undefined || post.email == null || post.email == ''){
        response.json({state:false,mensaje:'el campo email es obligatorio'})
        return;
    }

    if(request.body.password == undefined || request.body.password == null || request.body.password == ''){
        response.json({state:false,mensaje:'el campo password es obligatorio'})
        return;
    }

    usuariosModel.Login(post,function(respuesta){

        if(respuesta[0].password == post.password){
            response.json({state:true,mensaje:'Bienvenido',id:respuesta[0]._id})
        }
        else{
            response.json({state:false,mensaje:'Usuario o Password incorrecto'})
        }
      
    })
}

module.exports.usuarios = usuariosController