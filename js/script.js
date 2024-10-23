class menuHamburguer{
    //construtor para inicializar os elementos do menu
    constructor(menuHamburguer, navList, navLinks){
        this.mobileMenu = document.querySelector(menuHamburguer);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick =  this.handleClick.bind(this);
    }
    //método para animar os links de navegação
    animateLinks(){
        this.navLinks.forEach((link) => {
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards 0.3s`);
        });
    }

    //método para lidar com o clique no menu
    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    //método para adicionar evento de clique ao menu
    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    //método para inicializar o menu
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

//manipulação de clique em um botão, do footer
document.getElementById('btnID').addEventListener('click', function() {
    var content = document.getElementById('caixaID');
    if (content.classList.contains('show')) {
        content.classList.remove('show');
    } else {
        content.classList.add('show');
    }
});

//carrossel de itens
const carouselContainer = document.querySelector('.carousel-container');
const items = document.querySelectorAll('.servicos');
let itemWidth = items[0].offsetWidth + 20;
const intervalTime = 2500; 
let index = 0;

function showSlide() {
    const offset = -index * itemWidth;
    carouselContainer.style.transform = `translateX(${offset}px)`;
}

//função para iniciar a reprodução automática do carrossel
function startAutoplay() {
    setInterval(() => {
        index = (index + 3) % items.length; 
        showSlide();
    }, intervalTime);
}

startAutoplay();//inicia a reprodução automática

//evento para redimensionar a janela
window.addEventListener('resize', () => {
    itemWidth = items[0].offsetWidth + 20;
    showSlide(); 
});
