var path = require('path')
global.multer           = require('multer');

var Herramientas = {}



Herramientas.UploadFiles = function(request,configuracion,callback){

	var config = {
		nombrearchivo:configuracion.nombrearchivo,
		extensiones:configuracion.extensiones,
		destinoPath:configuracion.destinoPath,
		inputName:configuracion.inputName
	}

	var errores = 0
	console.log('')
	console.log('')
	console.log('---------------------------------------------------------------------------')
	console.log('--------------------VALIDANDO CONFIGURACION UPLOADFILES--------------------')
	console.log('---------------------------------------------------------------------------')
	if(config.destinoPath == "" || config.destinoPath == undefined || config.destinoPath == null){
		 console.error('el campo destinoPath debe estar en la configuracion');
		
		 errores += 1
	}
	if(config.nombrearchivo == "" || config.nombrearchivo == undefined || config.nombrearchivo == null){
		 console.error('el campo nombrearchivo debe estar en la configuracion');
		 errores += 1
	}

	if(config.inputName == "" || config.inputName == undefined || config.inputName == null){
		console.error('el campo inputName debe estar en la configuracion');
		errores += 1
   	}
	if(config.extensiones == "" || config.extensiones == undefined || config.extensiones == null){
		 console.error('el campo extensiones debe estar en la configuracion');
		 errores += 1
		
	}

	if(config.extensiones == undefined || config.extensiones.length == 0  ){
		 console.error('el campo extensiones debe contener almenos una extension permitida ejemplo [".doc",".xls"]');
		 errores += 1
	}
	console.log(config)


	if(errores > 0){
	
		return false
	}
	else{
		console.log('Estructura: Ok')
		
	}

	var ext = "";
    var upload = multer({
		storage:  multer.diskStorage({
		destination: function(req, file, callback) {
		  callback(null, __dirname + config.destinoPath)
		},
		filename: function(req, file, callback) {         
			console.log(file)       
			callback(null, config.nombrearchivo + path.extname(file.originalname))
		}
	  }),
		fileFilter: function(request, file, callback) {
		  
		  ext = path.extname(file.originalname)
		  console.log(ext)
		  console.log('Analizando extension: ' + ext)
		  var existe = config.extensiones.indexOf(ext)
		  if(existe < 0){
			console.log('Permiso de Escritura: Denegado' )
			return callback({state:false,mensaje:'solo soporta los siguientes formatos ' + config.extensiones.join(' | ') }, null)   
		  }

		  console.log('Permiso de Escritura: Permitido' )
		  return callback(null, true)
		}
	  }).single(config.inputName)


	  upload(request, null, function(respuestafinal) {
			//console.log(respuestafinal)
		if(respuestafinal != undefined) {
			console.log('Mensaje: ' + respuestafinal.mensaje)
		  	console.log('Subida de Archivo: Error')
			console.log('---------------------------------------------------------------------------')
			return callback(respuestafinal)
		}
		else
		{   
		console.log('Subida de Archivo: Ok')
		console.log('---------------------------------------------------------------------------')
		return callback({state:true,mensaje:'Archivo Cargado',ext:ext })
		 
		}

	  })


}


module.exports.Herramientas = Herramientas