document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const errorContainer = document.getElementById("error-container");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const usuario = document.getElementById("username").value;
        const contraseña = document.getElementById("password").value;

        if (autenticarUsuario(usuario, contraseña)) {
            const credentials = { usuario, contraseña };
            localStorage.setItem("credentials", JSON.stringify(credentials));

            window.location.href = "pages/prestamo.html";
        } else {
            errorContainer.textContent = 'Las credenciales no son válidas';
        }
    });
});

function autenticarUsuario(usuario, contraseña) {
    if (usuario === 'Yanel' && contraseña === '1234') {
        return true;
    } else {
        return false;
    }
}
