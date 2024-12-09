// Seleccionamos el círculo y la imagen correspondiente
const circle = document.getElementById("circle");
const img1 = document.querySelector(".carousel-item.active img");

// Añadimos el evento click al círculo
circle.addEventListener("click", () => {
    if (img1.src.includes("fondouno.png")) {
        img1.src = "../assets/img/fondo3-3.jpeg"; // Cambia la imagen al hacer clic
        circle.style.display = "none"; // Oculta el círculo
    }
});

// Seleccionamos el círculo y la imagen correspondiente
const circle2 = document.getElementById("circle2");
const img2 = document.getElementById("img2");

// Controlamos los dos eventos del segundo círculo
let clickCount = 0;

circle2.addEventListener("click", () => {
    if (clickCount === 0) {
        img2.src = "../assets/img/fondo5-5.jpeg"; // Primer cambio de imagen
        clickCount++;
    } else if (clickCount === 1) {
        img2.src = "../assets/img/fondo5-5_2.jpeg"; // Segundo cambio de imagen
        circle2.style.display = "none"; // Oculta el círculo después del último evento
        clickCount++;
    }
});

// Seleccionamos el círculo y la imagen correspondiente
const circle3 = document.getElementById("circle3");
const img3 = document.getElementById("img3");

// Controlamos los dos eventos del tercer círculo
let clickCount3 = 0;

circle3.addEventListener("click", () => {
    if (clickCount3 === 0) {
        img3.src = "../assets/img/fondo1-1.jpeg"; // Primer cambio de imagen
        clickCount3++;
    } else if (clickCount3 === 1) {
        img3.src = "../assets/img/fondo1-1_2.jpeg"; // Segundo cambio de imagen
        circle3.style.display = "none"; // Oculta el círculo después del último evento
        clickCount3++;
    }
});
