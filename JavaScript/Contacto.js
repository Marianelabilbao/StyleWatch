//DOM  Asegura que todo esté cargado previo a ejecutarse
document.addEventListener("DOMContentLoaded", function() {
    // Elementos a manipular
    const form = document.getElementById("contactForm");
    const prefEmail = document.getElementById("prefEmail");
    const prefTelefono = document.getElementById("prefTelefono");
    const email = document.getElementById("email");
    const telefono = document.getElementById("telefono");

    // Función para actualizar los atributos required, para que el usuario no deje el medio elegido en blanco
    function updateRequiredFields() {
        if (prefEmail.checked) {
            email.required = true;
            telefono.required = false;
        } else if (prefTelefono.checked) {
            email.required = false;
            telefono.required = true;
        } else {
            email.required = false;
            telefono.required = false;
        }
    }

    // Agregar eventos a las casillas de verificación, para que sea requerido uno de los dos medios de contacto
    prefEmail.addEventListener("change", updateRequiredFields);
    prefTelefono.addEventListener("change", updateRequiredFields);

    // Agregar evento al envío del formulario
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente

        // Validar los campos del formulario
        const nombre = document.getElementById("nombre").value.trim();
        const motivo = document.getElementById("motivo").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        // Validar que los campos obligatorios no estén vacíos
        if (nombre === "" || motivo === "" || mensaje === "") {
            alert("Por favor, complete todos los campos obligatorios.");
            return;
        }

        // Validar el formato del email utilizando una expresión regular simple
        const emailValue = email.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (prefEmail.checked && !emailRegex.test(emailValue)) {
            alert("Por favor, ingrese un correo electrónico válido.");
            return;
        }

        // Verificar que al menos uno de los campos requeridos esté completado
        if (!email.checkValidity() && !telefono.checkValidity()) {
            alert("Por favor, proporciona al menos un medio de contacto: email o teléfono.");
            return;
        }

        // Si todos los campos son válidos, enviar el formulario (aquí puedes agregar el código para enviar el formulario a tu backend si lo tienes)
        alert("Formulario enviado correctamente. Muchas Gracias.");
        form.reset(); // Limpiar el formulario después de enviarlo
    });
});
