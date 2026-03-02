//funcion formulario de reserva
/*
form.addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const personas = document.getElementById("personas").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;

    if (!nombre || !correo || !personas || !telefono || !fecha || !hora) {
        alert("Por favor complete todos los campos obligatorios.");
        return;
    }

    alert("Su reserva se ha creado con éxito");

    form.reset();
    modal.hide();
});*/

//funcion formulario de reserva con onCLick
function hacerReserva() {
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const personas = document.getElementById("personas").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;

    if (!nombre || !correo || !personas || !telefono || !fecha || !hora) {
        alert("Por favor complete todos los campos obligatorios.");
        return;
    }

    alert("Su reserva se ha creado con éxito");

    document.getElementById("formReserva").reset();

    const modalElement = document.getElementById("reservaModal");
    const modal = window.bootstrap.Modal.getInstance(modalElement);
    modal.hide();
}

function abrirModal() {
    const modalElement = document.getElementById("reservaModal");
    const modal = new window.bootstrap.Modal.getOrCreateInstance(modalElement);
    modal.show();
}

//funcion scroll suave
/*document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
        }
    });
});*/

//funcion scroll suave con onCLick
function scrollSeccion(id) {
    const seccion = document.getElementById(id);

    const offset = document.querySelector(".navbar").offsetHeight;

    const posicion = seccion.offsetTop - offset;

    window.scrollTo({
        top: posicion,
        behavior: "smooth"
    });
}

//Para que el header no tape parte del main
window.addEventListener("load", function() {
    const navbar = document.querySelector(".navbar");
    const main = document.querySelector("main");

    const navHeight = navbar.offsetHeight;
    main.style.marginTop = navHeight + "px";
});
