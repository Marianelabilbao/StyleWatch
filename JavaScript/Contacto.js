document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const prefEmail = document.getElementById("prefEmail");
    const prefTelefono = document.getElementById("prefTelefono");
    const emailField = document.getElementById("email");
    const telefonoField = document.getElementById("telefono");
    const nombreField = document.getElementById("nombre");
    const motivoField = document.getElementById("motivo");
    const mensajeField = document.getElementById("mensaje");

    // Función para actualizar los atributos required de email y teléfono según la preferencia de contacto
    function updateRequiredFields() {
        if (prefEmail.checked) {
            emailField.required = true;
            telefonoField.required = false;
        } else if (prefTelefono.checked) {
            emailField.required = false;
            telefonoField.required = true;
        } else {
            emailField.required = false;
            telefonoField.required = false;
        }
    }

    // Agregar eventos a las casillas de verificación para actualizar los campos requeridos
    prefEmail.addEventListener("change", updateRequiredFields);
    prefTelefono.addEventListener("change", updateRequiredFields);

    // Agregar evento al envío del formulario
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente

        // Validar que al menos un medio de contacto esté seleccionado
        if (!prefEmail.checked && !prefTelefono.checked) {
            alert("Por favor, elige al menos un medio de contacto: email o teléfono.");
            return; // Detener el proceso de envío del formulario si no se selecciona ningún medio de contacto
        }

        // Validar que todos los campos obligatorios estén completados
        if (nombreField.value.trim() === "" || motivoField.value.trim() === "" || mensajeField.value.trim() === "") {
            alert("Por favor, complete todos los campos obligatorios.");
            return; // Detener el proceso de envío del formulario si hay campos vacíos
        }

        // Si todos los campos son válidos, enviar el formulario
        alert("Formulario enviado correctamente. ¡Gracias!");
        form.reset(); // Limpiar el formulario después de enviarlo
    });
});
