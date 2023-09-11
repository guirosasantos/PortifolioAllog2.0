"use strict";

var hamburguerPosition = 'r';
let acaoAtiva = false;

let imgsContainer = document.getElementById('grid-portifolio');
let imgs = imgsContainer.getElementsByTagName('img');

function itemVisibility(item) {
    item.animate([
        {
            // from
            visibility: "hidden",
            opacity: 0
        },
        {
            // to
            visibility: "visible",
            opacity: 1
        },
    ],

        {
            duration: 2000,
            fill: "both" // Mantém as propriedades da animação após a conclusão
        }
    );
}

function itemVisibilityHide(item) {
    item.animate([
        {
            // from
            visibility: "visible",
            opacity: 1
        },
        {
            // to
            visibility: "hidden",
            opacity: 0
        },
    ],

        {
            duration: 20,
            fill: "both" // Mantém as propriedades da animação após a conclusão
        }
    );
}

function HamburguerToLeft(element) {
    hamburguerPosition = 'l';
    let id = null;
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 20);
    function frame() {
        if (pos == 27) {
            clearInterval(id);
        } else {
            pos++;
            element.style.right = pos + "vw";
        }
    }

    let itens = document.querySelectorAll('.header-list__button');
    itens.forEach((item, index) => {
        setTimeout(() => {
            itemVisibility(item);
        }, 20 * index);
    });
}

function HamburguerToRight(element) {
    hamburguerPosition = 'r';
    let id = null;
    let pos = 27;
    clearInterval(id);
    id = setInterval(frame, 20);
    function frame() {
        if (pos == 0) {
            clearInterval(id);
        } else {
            pos--;
            element.style.right = pos + "vw";
        }
    }

    const itens = document.querySelectorAll('.header-list__button');
    itens.forEach((item, index) => {
        setTimeout(() => {
            itemVisibilityHide(item);
        }, 20 * index);
    });
}

function ChangeHamburguerPosition(element) {
    console.log(hamburguerPosition);
    if (hamburguerPosition === 'r') {
        HamburguerToLeft(element);
    } else {
        HamburguerToRight(element);
    }
}

$(document).ready(function () {
    $('.header-list__button').hover(function () {
        $(this).parent().toggleClass('active');
    });
});

$(document).ready(function () {
    $('.icon-list').hover(function () {
        $(this).parent().toggleClass('active');
    });
});


function submitForm() {
    
    const form = document.querySelector('.my-form')
    const formData = new FormData(form)
    const url = 'https://formsubmit.co/guirosasantos1010@gmail.com'
    fetch(
        url,
        {
            method: 'POST',
            body: formData
        }
    )

    mostrarSnackbar();
    return false
}


function mostrarSnackbar() {
    var snackbar = document.getElementById("snackbar");
    snackbar.className = "show";
    setTimeout(function () { snackbar.className = snackbar.className.replace("show", ""); }, 3000);
}

function verificarPosicaoDeRolagem() {
    const menuBackground = document.getElementById("menu-background");
    
    if (window.scrollY > 500 && !acaoAtiva) {
        acaoAtiva = true;
        menuBackground.style.display = 'block';
    } else if (window.scrollY === 0 && acaoAtiva) {
        // Desative a ação quando a página voltar à posição inicial
        acaoAtiva = false;
        menuBackground.style.display = 'none';
    }
}

addEventListener("scroll", verificarPosicaoDeRolagem);

function showWebsites() {
    var imagesTransition = document.getElementById("grid-portifolio");
    imagesTransition.className = "transition-imagesWeb";
    imgs[0].src = 'Images/Portifolio/portfolio-website-4.jpg';
    imgs[1].src = 'Images/Portifolio/portfolio-website-4.jpg';
    imgs[2].src = 'Images/Portifolio/portfolio-website-4.jpg';
    imgs[3].src = 'Images/Portifolio/portfolio-website-4.jpg';
    imgs[4].src = 'Images/Portifolio/portfolio-website-4.jpg';
    imgs[5].src = 'Images/Portifolio/portfolio-website-4.jpg';
}

function showProjects() {
    var imagesTransition = document.getElementById("grid-portifolio");
    imagesTransition.className = "transition-imagesProjects";
    imgs[0].src = 'Images/Portifolio/portfolio-website-6.jpg';
    imgs[1].src = 'Images/Portifolio/portfolio-website-6.jpg';
    imgs[2].src = 'Images/Portifolio/portfolio-website-6.jpg';
    imgs[3].src = 'Images/Portifolio/portfolio-website-6.jpg';
    imgs[4].src = 'Images/Portifolio/portfolio-website-6.jpg';
    imgs[5].src = 'Images/Portifolio/portfolio-website-6.jpg';
}

function showCameras() {
    var imagesTransition = document.getElementById("grid-portifolio");
    imagesTransition.className = "transition-imagesCameras";
    imgs[0].src = 'Images/Portifolio/portfolio-website-2.jpg';
    imgs[1].src = 'Images/Portifolio/portfolio-website-2.jpg';
    imgs[2].src = 'Images/Portifolio/portfolio-website-2.jpg';
    imgs[3].src = 'Images/Portifolio/portfolio-website-2.jpg';
    imgs[4].src = 'Images/Portifolio/portfolio-website-2.jpg';
    imgs[5].src = 'Images/Portifolio/portfolio-website-2.jpg';
}


// Get the viewport width and height
const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

// Log the width and height to the console
console.log(`Viewport Width: ${viewportWidth}px`);
console.log(`Viewport Height: ${viewportHeight}px`);
