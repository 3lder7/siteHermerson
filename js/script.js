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

// Novo código para tentar autoplay do vídeo
document.addEventListener('DOMContentLoaded', () => {
    const video = document.querySelector('#backgroundVideo');
    const playButton = document.getElementById('playVideoButton');  // Botão de fallback
    
    if (video) {
        // Tenta reproduzir o vídeo automaticamente
        const playVideo = () => {
            video.play().then(() => {
                console.log('Vídeo está sendo reproduzido');
                // Se reproduzir com sucesso, esconda o botão
                playButton.classList.remove('visible');
            }).catch(error => {
                console.error('Erro ao reproduzir o vídeo automaticamente:', error);
                // Se falhar, mostre o botão de fallback
                playButton.classList.add('visible');
            });
        };
        
        // Tenta reproduzir imediatamente (pode falhar em mobile)
        playVideo();
        
        // Adiciona ouvidor para a primeira interação do usuário
        document.body.addEventListener('click', playVideo, { once: true });  // Executa apenas uma vez
        document.body.addEventListener('touchstart', playVideo, { once: true });  // Para dispositivos móveis
    }
    
    // Adiciona evento de clique no botão de fallback
    if (playButton) {
        playButton.addEventListener('click', () => {
            const video = document.querySelector('#backgroundVideo');
            if (video) {
                video.play();  // Reproduz o vídeo quando o botão é clicado
                playButton.classList.remove('visible');  // Esconde o botão após o clique
            }
        });
    }
});
