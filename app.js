var express = require('express')
global.app = express()
global.config = require('./config.js').config
const mongoose = require('mongoose')
var path = require('path')
global.sha256 = require('sha256')


var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))



var cors = require('cors')
app.use(cors());


mongoose.connect('mongodb://127.0.0.1:27017/'+ config.bd,{useNewurlParser:true,useUnifiedTopology:true},(error,response) =>{
    if(error){
        console.log(error)
    }
    else{
        console.log('conexion correcta a mongo')
    }
})


require('./routes/rutas.js')


app.use('/',express.static(__dirname + '/Pagina'))
app.get('/*',function(req,res,next){
    res.sendFile(path.resolve(__dirname + "/Pagina/index.html"))
})


app.listen(config.puerto,function(){
    console.log('Servidor Funcionando por el puerto '+ config.puerto)
})