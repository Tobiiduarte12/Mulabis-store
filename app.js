const menu = document.querySelector('nav');
const hamburMenu = document.querySelector('.hamburger-menu');
hamburMenu.addEventListener('click',()=>{
    menu.classList.toggle('active');
})

const sliderWrapper = document.querySelector('.slider-wrapper');
const prevSlide = document.querySelector('.prev-slide');
const nextSlide = document.querySelector('.next-slide');

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Mostrar la primera diapositiva
slides[slideIndex].style.display = 'flex';

// Función para avanzar a la siguiente diapositiva
function next() {
  slides[slideIndex].style.display = 'none';
  slideIndex = (slideIndex + 1) % totalSlides;
  slides[slideIndex].style.display = 'flex';
}

// Función para retroceder a la diapositiva anterior
function prev() {
  slides[slideIndex].style.display = 'none';
  slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
  slides[slideIndex].style.display = 'flex';
}

// Evento para avanzar a la siguiente diapositiva
nextSlide.addEventListener('click', () => {
  next();
});

// Evento para retroceder a la diapositiva anterior
prevSlide.addEventListener('click', () => {
  prev();
});

// Avanzar a la siguiente diapositiva cada 5 segundos
setInterval(() => {
  next();
}, 5000);

const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Lógica para agregar el producto al carrito
    console.log('Producto agregado al carrito');
  });
});

const productCard=document.querySelector('.product-card')
const arrayDeProducts = [
    {
        nombre: 'buzo 1',
        url: './img/buzo 1.jpg',
        id: 'item 1',
        desc: 'buzo negro para invierno',
        price: '300',
    },
    {
        nombre: 'buzo 2',
        url: './img/buzo 2.jpg',
        id: 'item 2',
        desc: 'buzo blanco para invierno',
        price: '33330',
    },
    {
        nombre: 'buzo 3',
        url: './img/buzo 3.png',
        id: 'item 3',
        desc: 'buzo gris invierno',
        price: '30440',
    },
    {
        nombre: 'buzo 1',
        url: './img/buzo 1.jpg',
        id: 'item 1',
        desc: 'buzo negro para invierno',
        price: '300',
    },
    {
        nombre: 'buzo 2',
        url: './img/buzo 2.jpg',
        id: 'item 2',
        desc: 'buzo blanco para invierno',
        price: '33330',
    },
    {
        nombre: 'buzo 3',
        url: './img/buzo 3.png',
        id: 'item 3',
        desc: 'buzo gris invierno',
        price: '30440',
    },
    {
        nombre: 'buzo 1',
        url: './img/buzo 1.jpg',
        id: 'item 1',
        desc: 'buzo negro para invierno',
        price: '300',
    },
    {
        nombre: 'buzo 2',
        url: './img/buzo 2.jpg',
        id: 'item 2',
        desc: 'buzo blanco para invierno',
        price: '33330',
    },
    {
        nombre: 'buzo 3',
        url: './img/buzo 3.png',
        id: 'item 3',
        desc: 'buzo gris invierno',
        price: '30440',
    },
    {
        nombre: 'buzo 1',
        url: './img/buzo 1.jpg',
        id: 'item 1',
        desc: 'buzo negro para invierno',
        price: '300',
    },
    {
        nombre: 'buzo 2',
        url: './img/buzo 2.jpg',
        id: 'item 2',
        desc: 'buzo blanco para invierno',
        price: '33330',
    },
    {
        nombre: 'buzo 3',
        url: './img/buzo 3.png',
        id: 'item 3',
        desc: 'buzo gris invierno',
        price: '30440',
    },
    {
        nombre: 'buzo 1',
        url: './img/buzo 1.jpg',
        id: 'item 1',
        desc: 'buzo negro para invierno',
        price: '300',
    },
    {
        nombre: 'buzo 2',
        url: './img/buzo 2.jpg',
        id: 'item 2',
        desc: 'buzo blanco para invierno',
        price: '33330',
    },
    {
        nombre: 'buzo 3',
        url: './img/buzo 3.png',
        id: 'item 3',
        desc: 'buzo gris invierno',
        price: '30440',
    },
    {
        nombre: 'buzo 1',
        url: './img/buzo 1.jpg',
        id: 'item 1',
        desc: 'buzo negro para invierno',
        price: '300',
    },
    {
        nombre: 'buzo 2',
        url: './img/buzo 2.jpg',
        id: 'item 2',
        desc: 'buzo blanco para invierno',
        price: '33330',
    },
    {
        nombre: 'buzo 3',
        url: './img/buzo 3.png',
        id: 'item 3',
        desc: 'buzo gris invierno',
        price: '30440',
    },
]
for (i = 0; i <= arrayDeProducts.length -1; i++){
    productCard.innerHTML += `
    <div class = "product-container">
    <div class="product-image">
    <img src="${arrayDeProducts[i].url}" alt="Product Image">
    </div>
    <div class="product-info">
    <h3 class="product-title">${arrayDeProducts[i].nombre}</h3>
    <p class="product-description">${arrayDeProducts[i].desc}</p>
    <p class="product-price">$ ${arrayDeProducts[i].price}</p>
    <button class="add-to-cart-btn">Agregar al carrito</button>
    </div>
    </div>`
}

