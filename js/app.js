 document.addEventListener("scroll", ()=>{
    const header = document.getElementById('botHeader');
    const up = document.getElementById('scrollUp');
    if(window.scrollY > 200){
        header.style.position = "fixed";
        header.style.top = "0";
        header.style.boxShadow = "0 0 5px #0003";
        up.style.transform = "none";
    }
    else{
        header.style.position = "static";
        up.style.transform = "translateX(100px)";
    }
});

// Carrusel Productos
const arrowLeft = document.getElementById('arrowLeft');
const arrowRight = document.getElementById('arrowRight');
const carrusel = document.getElementById('carrusel');

carrusel.style.transition = ".8s"
arrowLeft.addEventListener("click",()=>{
    carrusel.style.transform = "translateX(0)";
});
arrowRight.addEventListener("click",()=>{
    carrusel.style.transform = "translateX(-600px)";
});
document.addEventListener("DOMContentLoaded",()=>{
    setInterval(()=>{
        carrusel.style.transform = "translateX(-600px)";
    }, 5000);
    if(carrusel.style.transform === "translateX(-600px"){
        
    }
    setInterval(()=>{
        carrusel.style.transform = "translateX(0)";
    }, 10000);
}); 

// Carrusel Hora Pago
let TherapyButtons = document.querySelectorAll('.therapy-global ul li button');
let TherapyContainer = document.querySelector('.hora-pago');

TherapyButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        let newPosition = index * 400; 
        TherapyContainer.style.transform = `translateX(-${newPosition}px)`;
    });
});

TherapyButtons.forEach((button) =>{
    button.addEventListener('click', () => {
        TherapyButtons.forEach((btn) =>{
            btn.classList.remove('button-active');
        });
        button.classList.add('button-active');
    });
});

// Carrusel Our Latest News
let OurLatestButtons = document.querySelectorAll('.therapy-global ul li button');
let NewsContainer = document.querySelector('.hora-pago');

TherapyButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        let newPosition = index * 400; 
        TherapyContainer.style.transform = `translateX(-${newPosition}px)`;
    });
});

TherapyButtons.forEach((button) =>{
    button.addEventListener('click', () => {
        TherapyButtons.forEach((btn) =>{
            btn.classList.remove('button-active');
        });
        button.classList.add('button-active');
    });
});


