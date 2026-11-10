// Menú hamburguesa
const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector(".menu");

if (btnMenu) {
  btnMenu.addEventListener("click", () => {
    menu.classList.toggle("abierto");
    btnMenu.classList.toggle("activo");
  });
}

// Cerrar el menú al hacer clic en un enlace
document.querySelectorAll(".menu a").forEach(enlace => {
  enlace.addEventListener("click", () => {
    menu.classList.remove("abierto");
    if (btnMenu) btnMenu.classList.remove("activo");
  });
});

// Acordeón funcional (Cierra los demás al abrir uno)
const titulos = document.querySelectorAll(".accordion .titulo");

titulos.forEach(titulo => {
  titulo.addEventListener("click", () => {
    const item = titulo.parentElement;

    document.querySelectorAll(".accordion .item").forEach(otro => {
      if (otro !== item) otro.classList.remove("activo");
    });

    item.classList.toggle("activo");
  });
});

// Arreglo de datos para las tarjetas (Pizzas con tus imágenes reales)
const pizzas = [
  { titulo: "Pizza Margarita", precio: 6500, img: "./img/pizza mar.jpeg" },
  { titulo: "Pizza Peperoni", precio: 7500, img: "./img/pizza pepe.jpeg" },
  { titulo: "Pizza Hawaiana", precio: 7000, img: "./img/pizza hawa.jpeg" },
  { titulo: "Pizza Champiñones", precio: 7200, img: "./img/pizza cham.jpeg" },
  { titulo: "Pizza Funji", precio: 7800, img: "./img/pizza funji.jpeg" },
  { titulo: "Pizza Suprema", precio: 8500, img: "./img/pizza supre.jpeg" }
];

const contenedor = document.querySelector("#cards");

function pintarCards(lista) {
  if (!contenedor) return;
  contenedor.innerHTML = "";           
  lista.forEach(item => {
    const article = document.createElement("article");
    article.classList.add("tarjeta");
    article.innerHTML = `
      <img src="${item.img}" alt="${item.titulo}">
      <h3 style="padding: 0 1rem;">${item.titulo}</h3>
      <p style="padding: 0 1rem 1rem 1rem; font-weight: bold; color: var(--color-principal);">₡${item.precio}</p>
    `;
    contenedor.appendChild(article);
  });
}

if (contenedor) pintarCards(pizzas);

// Validación de formulario de contacto en JS
const form = document.querySelector(".formulario");

if (form) {
  form.addEventListener("submit", (e) => {
    const nombre = form.nombre.value.trim();
    const correo = form.correo.value.trim();
    let errores = [];

    if (nombre === "") errores.push("El nombre es obligatorio.");
    if (!correo.includes("@")) errores.push("El correo no es válido.");

    if (errores.length > 0) {
      e.preventDefault();
      const msg = document.querySelector("#mensajes");
      if (msg) msg.textContent = errores.join(" ");
    }
  });
}