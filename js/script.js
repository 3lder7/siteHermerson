class menuHamburguer{
    constructor(menuHamburguer, navList, navLinks){
        this.mobileMenu = document.querySelector(menuHamburguer);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick =  this.handleClick.bind(this);
    }

    animateLinks(){
        this.navLinks.forEach((link) => {
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards 0.3s`);
        });
    }

    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init(){
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}
const mobileNavbar = new menuHamburguer(
    ".menuHamburguer",
    ".nav-links",
    ".nav-links li",
);
mobileNavbar.init();

document.getElementById('btnID').addEventListener('click', function() {
    var content = document.getElementById('caixaID');
    if (content.classList.contains('show')) {
        content.classList.remove('show');
    } else {
        content.classList.add('show');
    }
});

// carousel.js CHATGPT
const carouselContainer = document.querySelector('.carousel-container');
const items = document.querySelectorAll('.servicos');
let itemWidth = items[0].offsetWidth + 20; // Largura do item + margem
const intervalTime = 2500; // Tempo entre as transições automáticas (em milissegundos)
let index = 0;

function showSlide() {
    const offset = -index * itemWidth;
    carouselContainer.style.transform = `translateX(${offset}px)`;
}

function startAutoplay() {
    setInterval(() => {
        index = (index + 3) % items.length; // Move para o próximo item
        showSlide();
    }, intervalTime);
}

// Inicializa o carrossel
startAutoplay();

// Recalcula a largura do item ao redimensionar a janela
window.addEventListener('resize', () => {
    // Atualiza a largura do item
    itemWidth = items[0].offsetWidth + 20; // Ajuste a largura do item + margem
    showSlide(); // Ajusta a posição para a largura correta
});














