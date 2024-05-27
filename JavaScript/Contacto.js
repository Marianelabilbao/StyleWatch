document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const prefEmail = document.getElementById("prefEmail");
    const prefTelefono = document.getElementById("prefTelefono");
    const emailField = document.getElementById("email");
    const telefonoField = document.getElementById("telefono");

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

        // Validar que al menos uno de los campos requeridos esté completado
        if (!emailField.checkValidity() && !telefonoField.checkValidity()) {
            alert("Por favor, proporciona al menos un medio de contacto: email o teléfono.");
            return; // Detener el proceso de envío del formulario si no hay un medio de contacto válido
        }

        // Validar los campos del formulario
        const nombre = document.getElementById("nombre").value.trim();
        const motivo = document.getElementById("motivo").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        // Validar que los campos obligatorios no estén vacíos
        if (nombre === "" || motivo === "" || mensaje === "") {
            alert("Por favor, complete todos los campos obligatorios.");
            return; // Detener el proceso de envío del formulario si hay campos vacíos
        }

        // Si todos los campos son válidos, enviar el formulario
        alert("Formulario enviado correctamente. ¡Gracias!");
        form.reset(); // Limpiar el formulario después de enviarlo
    });
});
