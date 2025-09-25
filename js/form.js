//Verificar los valores de entrada
function guardar() {
    let nombres = document.forms["formDatos"]["nombres"].value;
    //alert("Los nombres ingresados son: " + nombres)
    let apellidos = document.forms["formDatos"]["apellidos"].value;
    let numeroTelefonico = document.forms["formDatos"]["numeroTelefonico"].value;
    let correo = document.forms["formDatos"]["correo"].value;
    let pais = document.forms["formDatos"]["pais"].value;
    let ciudad = document.forms["formDatos"]["ciudad"].value;
    alert("Datos guardados con exito" + nombres)
}