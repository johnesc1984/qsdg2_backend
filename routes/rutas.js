

var matematicas = require('../controladores/matematicasController.js').matematicas;

app.post('/sumar',function(request,response){  
 matematicas.sumar(request,response)
})


var usuarios = require('../controladores/usuariosController.js').usuarios;

app.post('/Usuarios/Guardar',function(request,response){  
 usuarios.Guardar(request,response)
})



