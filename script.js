let navButton = document.getElementById("navButton");
let optionsBody = document.getElementById("optionsBody");

// Función para mostrar o no las opciones en SM

navButton.addEventListener("click", function(){
    optionsBody.classList.toggle("d-none");
});

// Función para mostrar optionsBody automáticamente en pantallas MD o LG

function showBodyOptions() {
    if (window.innerWidth >= 992) {
        optionsBody.classList.remove("d-none");
    } else {
        optionsBody.classList.add("d-none");
    }
}

// Llama a la función cuando se carga la página y cuando cambia el tamaño de la pantalla

showBodyOptions();

window.addEventListener("resize", showBodyOptions);