// Texto que deseas escribir
const texto = "desarrolladora de software junior";

// Elemento donde mostrarás el texto
const elementoTexto = document.querySelector(".hero_subtitle");

// Función para simular el efecto de escritura
function escribirTexto(texto, elemento, velocidad) {
    let i = 0;
    const intervalo = setInterval(function() {
    if (i < texto.length) {
        elemento.textContent += texto.charAt(i);
        i++;
    } else {
        clearInterval(intervalo);
    }
    }, velocidad);
}

// Llama a la función para iniciar el efecto de escritura
escribirTexto(texto, elementoTexto, 100); // Ajusta la velocidad a tu preferencia