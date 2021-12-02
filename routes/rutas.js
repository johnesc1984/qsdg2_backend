

var matematicas = require('../controladores/matematicasController.js').matematicas;

app.post('/sumar',function(request,response){  
 matematicas.sumar(request,response)
})


var usuarios = require('../controladores/usuariosController.js').usuarios;

app.post('/Usuarios/Guardar',function(request,response){  
 usuarios.Guardar(request,response)
})

app.post('/Usuarios/Listar',function(request,response){  
    usuarios.Listar(request,response)
})

app.post('/Usuarios/ListarId',function(request,response){  
    usuarios.ListarId(request,response)
})

app.post('/Usuarios/Actualizar',function(request,response){  
    usuarios.Actualizar(request,response)
})

app.post('/Usuarios/Eliminar',function(request,response){  
    usuarios.Eliminar(request,response)
})
   
app.post('/Usuarios/Login',function(request,response){  
    usuarios.Login(request,response)
})   


var email = require('../controladores/emailController.js').email;

// enviar correo electronico
app.post('/contactenos',function(request,response){
    email.contactenos(request,response)
})




// funcionamiento de sesiones
app.post('/milogin',function(request,response){
    //valide la informacion
    var post = {
        rol:request.body.rol
    }

    if(post.rol == undefined || post.rol == null || post.rol == ''){
        response.json({state:false,mensaje:'el campo rol es obligatorio'})
        return;
    }

    request.session.rol = post.rol
    request.session.nombre = 'john'
    console.log(request.session)

    response.json({state:true,mensaje:'Ok'})

})
app.post('/publicaciones',function(request,response){
   
    if(request.session.rol == undefined){
        response.json({state:false,mensaje:'Su tiempo ha caducado inicie session'})
    }
    else
    {
        response.json({state:true})
    }
 
})

