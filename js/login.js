function iniciar(){
    var usuario, clave;
    usuario = document.getElementById("username").value;
    clave = document.getElementById("password").value;

    if(usuario == "" || clave == ""){
        alert("Rellene los campos");
        return false;
    } else if(usuario == "admin" && clave == "12345"){
        window.location = "admin.html";
        return false;
    } else if(usuario == "cliente" && clave == "12345"){
        window.location = "usuario.html";
        return false;
    } else {
        alert("Datos incorrectos, verifique usuario y contraseña");
        return false;
    }
}