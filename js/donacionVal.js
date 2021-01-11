function validar() {
    var nombre,usuario, correo, clave, expresion;
    nombre = document.getElementById("nombre").value;
    tipo = document.getElementById("tipo").value;
    detalle = document.getElementById("detalle").value;
    cantidad = document.getElementById("cantidad").value;
    fecha = document.getElementById("fecha").value;

    expresion = /\w+@\w+\.+[a-z]/;

    if(nombre == "" || tipo == "" || detalle == "" || cantidad == "" || fecha == "" ){
        alert("Todos los campos son obligatorios");
        return false;
    } else {
        alert("Donación Exitosa");
        window.location = "usuario.html";
        return false;
    }
}