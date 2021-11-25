var usuariosModel = {}

const mongoose = require('mongoose')

const Schema = mongoose.Schema;
var UserSchema = new Schema({
    nombre:String
})
const Mymodel = mongoose.model('usuarios',UserSchema)


usuariosModel.Guardar = function(post,callback){

    const instancia = new Mymodel
    instancia.nombre = post.nombre
    instancia.save((error,userCreate) => {
        if(error){
            console.log(error)
            return callback({state:false,info:error})
        }
        else{
            console.log(userCreate)
            return callback({state:true,info:userCreate})
        }
    })

}

usuariosModel.Listar = function(post,callback){

    Mymodel.find({},{nombre:1,_id:1},(error,documentos) => {
        if(error){
            console.log(error)
            return callback(error)
        }
        else{
            return callback(documentos)
        }
    })

}

usuariosModel.ListarId = function(post,callback){

    Mymodel.find({_id:post.id},{nombre:1,_id:1},(error,documentos) => {
        if(error){
            console.log(error)
            return callback(error)
        }
        else{
            return callback(documentos)
        }
    })

}

usuariosModel.Actualizar = function(post,callback){
    Mymodel.findByIdAndUpdate(
        post.id,
        {nombre:post.nombre},
        (error,usuariomodificado) => {
            if(error){
                console.log(error)
                return callback({state:false,info:error})
            }
            else{
                return callback({state:true,info:usuariomodificado})
            }
        }
        )
}

usuariosModel.Eliminar = function(post,callback){
    
    Mymodel.findByIdAndDelete(post.id,(error,eliminado) => {
        if(error){
            console.log(error)
            return callback({state:false,info:error})
        }
        else{
            return callback({state:true,info:eliminado})
        }
    })
}



module.exports.usuarios = usuariosModel