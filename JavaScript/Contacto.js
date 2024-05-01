document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente

        // Validar los campos del formulario
        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const motivo = document.getElementById("motivo").value;
        const mensaje = document.getElementById("mensaje").value.trim();

        // Validar que los campos obligatorios no estén vacíos
        if (nombre === "" || email === "" || motivo === "" || mensaje === "") {
            return;
        }

        // Validar el formato del email utilizando una expresión regular simple
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)){
            return;
        }

        // Si todos los campos son válidos, enviar el formulario (aquí puedes agregar el código para enviar el formulario a tu backend si lo tienes)
        alert ("Formulario enviado correctamente. Muchas Gracias.");
        form.reset(); // Limpiar el formulario después de enviarlo
    });
});
