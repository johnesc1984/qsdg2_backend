

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
   
   



