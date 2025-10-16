// Classe do menu hambúrguer
class menuHamburguer {
    // Construtor para inicializar os elementos do menu
    constructor(menuHamburguer, navList, navLinks) {
        this.mobileMenu = document.querySelector(menuHamburguer);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    // Método para animar os links de navegação
    animateLinks() {
        this.navLinks.forEach((link) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards 0.3s`);
        });
    }

    // Método para lidar com o clique no menu
    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    // Método para adicionar evento de clique ao menu
    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    // Método para inicializar o menu
    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

// Instância do menuHamburguer
const mobileNavbar = new menuHamburguer(
    ".menuHamburguer",
    ".nav-links",
    ".nav-links li"
);
mobileNavbar.init();


// Manipulação de clique no botão do footer (Perguntas Frequentes)
document.getElementById('btnID').addEventListener('click', function() {
    const content = document.getElementById('caixaID');
    content.classList.toggle('show');
});


// ==================== CARROSSEL ==================== //
const carouselContainer = document.querySelector('.carousel-container');
const items = document.querySelectorAll('.servicos');
let itemWidth = items[0].offsetWidth + 20;
const intervalTime = 2500;
let index = 0;

// Função para exibir o slide atual
function showSlide() {
    const offset = -index * itemWidth;
    carouselContainer.style.transform = `translateX(${offset}px)`;
}

// Função para iniciar o autoplay do carrossel
function startAutoplay() {
    setInterval(() => {
        index = (index + 3) % items.length;
        showSlide();
    }, intervalTime);
}

startAutoplay(); // Inicia o carrossel automático

// Atualiza tamanho dos itens ao redimensionar
window.addEventListener('resize', () => {
    itemWidth = items[0].offsetWidth + 20;
    showSlide();
});


// ==================== AUTOPLAY DO VÍDEO DE FUNDO ==================== //
document.addEventListener('DOMContentLoaded', function () {
    const video = document.querySelector('header video');

    if (video) {
        // Tenta iniciar automaticamente
        const playPromise = video.play();

        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    console.log('🎬 Vídeo de fundo iniciado automaticamente');
                })
                .catch(error => {
                    console.warn('⚠️ Autoplay bloqueado — tentando iniciar silenciosamente...');
                    video.muted = true;
                    video.play().catch(() => {
                        console.error('🚫 Mesmo mudo, o navegador bloqueou o autoplay. Requer interação do usuário.');
                    });
                });
        }
    }
});
