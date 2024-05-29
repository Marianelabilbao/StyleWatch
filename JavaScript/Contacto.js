document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const prefEmail = document.getElementById("prefEmail");
    const prefTelefono = document.getElementById("prefTelefono");
    const email = document.getElementById("email");
    const telefono = document.getElementById("telefono");
    const limpiar = document.getElementById("limpiar");

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

    prefEmail.addEventListener("change", updateRequiredFields);
    prefTelefono.addEventListener("change", updateRequiredFields);

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const emailValue = document.getElementById("email").value.trim();
        const telefonoValue = document.getElementById("telefono").value.trim();
        const motivo = document.getElementById("motivo").value;
        const mensaje = document.getElementById("mensaje").value.trim();

        if (nombre === "" || motivo === "" || mensaje === "") {
            alert("Por favor, complete todos los campos obligatorios.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.required && !emailRegex.test(emailValue)) {
            alert("Por favor, ingrese un correo electrónico válido.");
            return;
        }

        if (!prefEmail.checked && !prefTelefono.checked) {
            alert("Por favor, seleccione al menos un medio de contacto: email o teléfono.");
            return;
        }

        alert("Formulario enviado correctamente. ¡Gracias por contactar a StyleWatch!");
        form.reset();
    });

    limpiar.addEventListener("click", function() {
        form.reset();
        updateRequiredFields();
    });
});
