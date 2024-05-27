//DOM  Asegura que todo este cargado previo a ejecutarse
document.addEventListener("DOMContentLoaded", function() {
    //que elementos se van a manipular
    const form = document.getElementById("contactForm");
    const prefEmail = document.getElementById("prefEmail");
    const prefTelefono = document.getElementById("prefTelefono");
    const email = document.getElementById("email");
    const telefono = document.getElementById("telefono");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente

        // Agregar eventos a las casillas de verificación, para que sea requerido uno de los dos medios de contacto
    prefEmail.addEventListener("change", updateRequiredFields);
    prefTelefono.addEventListener("change", updateRequiredFields);

         // Función para actualizar los atributos required, para que el usuario no deje el medio elegido en blanco
    function updateRequiredFields() {
        if (prefEmail.checked) {
            email.required = true;
        } else {
            email.required = false;
        }

        if (prefTelefono.checked) {
            telefono.required = true;
        } else {
            telefono.required = false;
        }
    }
        // Validar los campos del formulario
        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const motivo = document.getElementById("motivo").value;
        const mensaje = document.getElementById("mensaje").value.trim();

        // Validar que los campos obligatorios no estén vacíos
        if (!nombre === "" || !email === "" || !motivo === "" || !mensaje === "") {
            Alert("Por favor, complete todos los campos obligatorios.")
            return;
        }

        // Validar el formato del email utilizando una expresión regular simple
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)){
            alert("Por favor, ingrese un correo electrónico válido.")
            return;
        }

        // Si todos los campos son válidos, enviar el formulario (aquí puedes agregar el código para enviar el formulario a tu backend si lo tienes)
        alert ("Formulario enviado correctamente. Muchas Gracias.");
        form.reset(); // Limpiar el formulario después de enviarlo
    });
});
