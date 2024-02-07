const up = document.getElementById('scrollUp');
document.addEventListener("scroll", ()=>{
    const header = document.getElementById('botHeader');
    const slider = document.getElementById('slider');
    if(window.scrollY > 250){
        header.style.position = "fixed";
        header.style.top = "0";
        header.style.boxShadow = "0 0 5px #0003";
        up.style.transform = "none";
        slider.style.height = "calc(100vh - 50px)";
        // slider.classList.toggle("pruebaSlider")
    }
    else{
        slider.style.height = "calc(100vh - 93px - 50px)"
        header.style.position = "static";
        up.style.transform = "translateX(100px)";
    }
});

// Carrusel Hora Pago
let TherapyButtons = document.querySelectorAll('.therapy-global ul li button');
let TherapyContainer = document.querySelector('.hora-pago');
let currentIndex = 0;

// Función para actualizar la posición
function updatePosition() {
    let newPosition;
    if (window.innerWidth <= 768 && window.innerWidth > 576) {
        newPosition = currentIndex * 520; 
        if (newPosition >= 1040) {
            newPosition = currentIndex * 390;
        }
    } else if (window.innerWidth <= 576) {
        newPosition = currentIndex * 410; 
    } else {
        newPosition = currentIndex * 400; 
    }
    TherapyContainer.style.transform = `translateX(-${newPosition}px)`;
    TherapyButtons.forEach((btn) => {
        btn.classList.remove('button-active');
    });
    TherapyButtons[currentIndex].classList.add('button-active');
}



// Evento de clic para los botones
TherapyButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        currentIndex = index;
        updatePosition();
    });
});

//Actualizar la posición automáticamente cada 5 segundos
setInterval(() => {
    if (window.innerWidth <= 768 && window.innerWidth > 576) {
        currentIndex = (currentIndex + 1) % 3; 
    } else if (window.innerWidth <= 576) {
        currentIndex = (currentIndex + 1) % 5; 
    } else {
        currentIndex = (currentIndex + 1) % 2; 
    }
    updatePosition();
}, 5000);



// Carrusel Productos
const arrowLeft = document.getElementById('arrowLeft');
const arrowRight = document.getElementById('arrowRight');
const carrusel = document.getElementById('carrusel');
const iconOjo = document.querySelectorAll(".iconos > button");
const cajaProduct = document.getElementById('showProduct');
const product = document.getElementById('.cardProduct');
const iconCerrar = document.getElementById('iconCerrar');

iconOjo.forEach(function(element) {
    element.addEventListener("click", function() {
        const contenedorPadre = document.getElementById("contentCarrusel");
        if (contenedorPadre) {
            document.body.classList.add("activeProduct");
            document.body.style.userSelect = "none";
            up.style.transform = "translateX(200px)";
        }
    });
});

iconCerrar.addEventListener("click",()=>{
    document.body.classList.remove("activeProduct");
    document.body.style.userSelect = "initial";
    up.style.transform = "none";
});

let isDragging = false;

document.addEventListener("mousedown", () => {
    isDragging = true;
});

document.addEventListener("mouseup", () => {
    isDragging = false;
});

cajaProduct.addEventListener("mousemove", (event) => {
    let altomax = window.innerHeight;
    let altocaja = cajaProduct.clientHeight;
    let calculoY = altomax/2 - altocaja/2;
    let y = event.clientY - calculoY + 0.5;
    console.log(y);
    let calculo = y - altomax/2;
    if (isDragging) {
        cajaProduct.style.position = "absolute";
        cajaProduct.style.transform = "translateY("+ calculo + "px)";
        cajaProduct.style.transition = "0s";
        console.log(calculo);
    }
    else{
        cajaProduct.style.transform ="none";
        cajaProduct.style.transition = ".2s";
        cajaProduct.style.background = "#fff"
    }

    /*if(calculo >= 400 || calculo <= -200){
        document.body.classList.remove("activeProduct");
    }*/
});

document.addEventListener("DOMContentLoaded",()=>{
    const contenidom = document.getElementById('contenidom');
    const anchoPantasha = window.innerWidth;

    if(anchoPantasha <= 768){
        contenidom.classList.add("content");
        let clickCount = 0;
        arrowRight.addEventListener("click",()=>{
            clickCount++;
            if(clickCount === 1) {
                carrusel.style.transform = "translateX(-550px)";
            } else if(clickCount === 2) {
                carrusel.style.transform = "translateX(-1100px)";
            } else {
                carrusel.style.transform = "translateX(0)";
                clickCount = 0;
            }
        });
        arrowLeft.addEventListener("click",()=>{
            clickCount++;
            if(clickCount === 0) {
                carrusel.style.transform = "translateX(0)";
            } else if(clickCount === -1) {
                carrusel.style.transform = "translateX(-550px)";
            } else {
                carrusel.style.transform = "translateX(-1100px)";
                clickCount = -2;
            }
        });
        setInterval(()=>{
            clickCount++;
            if(clickCount === 1) {
                carrusel.style.transform = "translateX(-550px)";
            } else if(clickCount === 2) {
                carrusel.style.transform = "translateX(-1100px)";
            } else {
                carrusel.style.transform = "translateX(0)";
                clickCount = 0;
            }
        }, 10000);
    }
    
    else if(anchoPantasha <= 990){
        contenidom.classList.add("content");
        arrowRight.addEventListener("click",()=>{
            carrusel.style.transform = "translateX(-688px)";
        });
        arrowLeft.addEventListener("click",()=>{
            carrusel.style.transform = "translateX(0)";
        });
        setInterval(()=>{
            carrusel.style.transform = "translateX(-688px)";
        }, 5000);
        setInterval(()=>{
            carrusel.style.transform = "translateX(0)";
        }, 10000);
    }
    else{
        contenidom.classList.remove("content");
        arrowRight.addEventListener("click",()=>{
            carrusel.style.transform = "translateX(-600px)";
        });
        arrowLeft.addEventListener("click",()=>{
            carrusel.style.transform = "translateX(0)";
        });
        setInterval(()=>{
            carrusel.style.transform = "translateX(-600px)";
        }, 5000);
        setInterval(()=>{
            carrusel.style.transform = "translateX(0)";
        }, 10000);
    }
}); 


// Carrusel comentarios
// Primero, obtenemos los botones y los artículos por su ID
let btnLeft = document.getElementById('btnIcoComLeft');
let btnRight = document.getElementById('btnIcoComRight');
let articles = [document.getElementById('article1'), document.getElementById('article2'), document.getElementById('article3')];

// Esta variable mantendrá un registro del artículo que se está mostrando actualmente
let currentIndexComment = 0;

// Esta función se encargará de mostrar el artículo correcto
function updateComment() {
    // Primero, ocultamos todos los artículos
    articles.forEach((article) => {
        article.style.animation = "none";
        article.style.filter = "opacity(0)";
    });

    // Luego, mostramos el artículo que queremos ver
    articles[currentIndexComment].style.filter = "opacity(1)";
}

// Cuando se hace clic en el botón izquierdo, queremos mostrar el artículo anterior
btnLeft.addEventListener('click', () => {    // Disminuimos el índice del artículo actual
    // Si ya estamos en el primer artículo, vamos al último
    currentIndexComment = (currentIndexComment - 1 + articles.length) % articles.length;

    // Luego, actualizamos la vista para mostrar el artículo correcto
    updateComment();
});

// Cuando se hace clic en el botón derecho, queremos mostrar el siguiente artículo
btnRight.addEventListener('click', () => {
    // Aumentamos el índice del artículo actual
    // Si ya estamos en el último artículo, volvemos al primero
    currentIndexComment = (currentIndexComment + 1) % articles.length;

    // Luego, actualizamos la vista para mostrar el artículo correcto
    updateComment();
});

// Finalmente, cuando la página se carga por primera vez, queremos mostrar el primer artículo
updateComment();


// Carrusel Our Latest News
let NewsButtons = document.querySelectorAll('.global-oln ul li button');
let NewsContainer = document.querySelector('.details-news');
let currentIndexNews = 0;

// Función para actualizar la posición
function updatePositionNews() {
    let newPositionNews;
    if (window.innerWidth <= 990) {
        newPositionNews = currentIndexNews * 710; // Ancho de noticia en media query
    } else if (window.innerWidth <= 768){
        newPositionNews = currentIndexNews * 550; // Ancho de noticia en media query
    }
     else {
        newPositionNews = currentIndexNews * 1200; // Ancho de noticia en pantalla completa
    }
    NewsContainer.style.transform = `translateX(-${newPositionNews}px)`;
    NewsButtons.forEach((btn) => {
        btn.classList.remove('button-active');
    });
    NewsButtons[currentIndexNews].classList.add('button-active');
}

// Evento de clic para los botones
NewsButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        currentIndexNews = index;
        updatePositionNews();
    });
});

setInterval(() => {
    if (window.innerWidth <= 768) {
        currentIndexNews = (currentIndexNews + 1) % 6;
    } else if (window.innerWidth <= 990) {
        currentIndexNews = (currentIndexNews + 1) % 3; 
    } else {
        currentIndexNews = (currentIndexNews + 1) % 2; 
    }
    updatePositionNews();
}, 10000);



// Media querys
$(document).ready(function(){
    $('.header-icons .bars').click(function(){
        $('.navbar .links').toggleClass('show');
    });
});
