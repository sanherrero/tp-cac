"use strict";

function Captcha() {
    var alpha = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
        'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', 
            '0','1','2','3','4','5','6','7','8','9');
    var i;
    for (i=0;i<4;i++) {
        var a = alpha[Math.floor(Math.random() * alpha.length)];
        var b = alpha[Math.floor(Math.random() * alpha.length)];
        var c = alpha[Math.floor(Math.random() * alpha.length)];
        var d = alpha[Math.floor(Math.random() * alpha.length)];
        }
        var code = a + ' ' + b + ' ' + ' ' + c + ' ' + d;
        document.getElementById("Captcha").innerHTML = code;
        document.getElementById("Captcha").value = code;
}

function ValidarCaptcha() {
    var string1 = removeSpaces(document.getElementById('Captcha').value);
    var string2 = removeSpaces(document.getElementById('txtInput').value);
    if (string1 == string2){
        return true;
    }
    else{
        return false;
    }
}

function removeSpaces(string) {
    return string.split(' ').join('');
}

function validarFormulario(){
    var txtNombre = document.getElementById('nombre').value;
    var txtApellido = document.getElementById('apellido').value;
    var txtFechaPedido = document.getElementById('dia').value;
    var txtCorreo = document.getElementById('correo').value;
    var txtDireccion = document.getElementById('direccion').value;
    var txtHorario = document.getElementById('horario').value;


    if(txtNombre == null || txtNombre.length == 0 || /^\s+$/.test(txtNombre)){
        alert('ERROR: El campo nombre no debe ir vacío');
        return false;
    }

    if(txtApellido == null || txtApelido.length == 0 || /^\s+$/.test(txtApellido)){
        alert('ERROR: El campo apellido no debe ir vacío');
        return false;
    }

    if(!isNaN(txtFechaPedido)){
        alert('ERROR: Debe elegir una fecha');
        return false;
    }
 
    if(!(/\S+@\S+\.\S+/.test(txtCorreo))){
        alert('ERROR: Debe escribir un correo válido');
        return false;
    }

    if(txtDireccion == null || txtDireccion.length == 0 || /^\s+$/.test(txtDireccion)){
        alert('ERROR: El campo direccion no debe ir vacío');
        return false;
    }
    
    if(txtHorario == null || txtHorario.length == 0 || /^\s+$/.test(txtHorario)){
        alert('ERROR: El campo horario no debe ir vacío');
        return false;
    }
 
    alert("Datos ingresados correctamente");
    return true;
}

function valid(){
    if (validarFormulario(true) & ValidarCaptcha(true)){
        return true;
    }
    else {
        return false;
    }
}