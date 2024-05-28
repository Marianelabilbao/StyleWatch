
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const prefEmail = document.getElementById("prefEmail");
    const prefTelefono = document.getElementById("prefTelefono");
    const email = document.getElementById("email");
    const telefono = document.getElementById("telefono");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

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

        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const motivo = document.getElementById("motivo").value;
        const mensaje = document.getElementById("mensaje").value.trim();

        if (nombre === "" || motivo === "" || mensaje === "") {
            alert("Por favor, complete todos los campos obligatorios.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)){
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
});
