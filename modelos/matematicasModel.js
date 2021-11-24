var matematicasModel = {}


matematicasModel.sumar = function(post,callback){
    var total = post.valor1 + post.valor2
    return callback({state:true,mensaje:'el total es ' + total})
}

matematicasModel.guardarenusuarios = function(post,callback){
    var total = post.valor1 + post.valor2
    return callback({state:true,mensaje:'el total es ' + total})
}

matematicasModel.guardarenrespaldo = function(post,callback){
    var total = post.valor1 + post.valor2
    return callback({state:true,mensaje:'el total es ' + total})
}




module.exports.matematicas = matematicasModel