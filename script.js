function presionarBoton() {
    let nombre = document.getElementById("fname").value;
    let apellido = document.getElementById("lname").value;
    let mensaje = document.getElementById("message").value;

    if (nombre == '' || apellido == '' || mensaje == '') {
        alert('Por favor, complete todos los campos.');
        return;
    } else {
        console.log("Mensaje enviado: " + mensaje);
        alert("Gracias por tu mensaje: " + nombre + " " + apellido + "! Te responderemos en breve. Tu mensaje aparece en la consola.");
        document.getElementById('fname').value = '';
        document.getElementById('lname').value = '';
        document.getElementById('message').value = '';
        return;
    }
}