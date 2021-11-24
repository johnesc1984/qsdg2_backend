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


module.exports.usuarios = usuariosModel