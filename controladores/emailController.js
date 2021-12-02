var emailController = {}

emailController.contactenos = function(request,response){


    var post = {
        mensaje:request.body.mensaje,
        email:request.body.email,
        asunto:request.body.asunto,
        nombre:request.body.nombre
    }
    
    if(post.mensaje == undefined || post.mensaje == null || post.mensaje == '' ){
        response.json({state:false,mensaje:'el campo mensaje es obligatorio'})
        return;
    }

    if(post.nombre == undefined || post.nombre == null || post.nombre == '' ){
        response.json({state:false,nombre:'el campo nombre es obligatorio'})
        return;
    }
    
    if(post.asunto == undefined || post.asunto == null || post.asunto == '' ){
        response.json({state:false,mensaje:'el campo asunto es obligatorio'})
        return;
    }
    
    if(post.email == undefined || post.email == null || post.email == '' ){
        response.json({state:false,mensaje:'el campo email es obligatorio'})
        return;
    }
    
    let transporte = nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:587,
        secure:false,
        requireTLS:true,
        auth:{
            user:config.emailcontactenos,
            pass:config.passwordcontactenos
            
        }
    })
    
    let mailOptions = {
        from:config.emailcontactenos,
        to:'pruebasprogramacion123@gmail.com',
        subject:post.asunto,
        html:'<div> el señor: ' + post.nombre + ' con el correo: '+ post.email + ' Dice: ' + post.mensaje +'</div>'
    }
    
    console.log('aqui')
    transporte.sendMail(mailOptions,(error,info) => {
        if(error){
            console.log(error)
           return console.log(error.mensaje)
        }
        else{
            response.json({mensaje:'enviado'})
        }
    })
    

}



module.exports.email = emailController