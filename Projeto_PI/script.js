    const perguntas = document.querySelectorAll('.faq-pergunta');

    perguntas.forEach(pergunta => {
        pergunta.addEventListener('click', () => {
            const resposta = pergunta.nextElementSibling;
            resposta.style.maxHeight = resposta.style.maxHeight ? null : resposta.scrollHeight + 'px';
        });
    });
    //para abrir os accordions

    document.addEventListener('DOMContentLoaded', () => {
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dotsContainer = document.querySelector('.dots-container');

    let currentIndex = 0;
    const totalItems = carouselItems.length;

    // Função para atualizar as classes de cada item do carrossel
    function updateCarouselItems() {
        carouselItems.forEach((item, index) => {
            item.classList.remove('active', 'behind-1', 'behind-2', 'behind-3', 'behind-4', 'hidden');

            // Calcula a distância relativa para aplicar as classes
            const distance = index - currentIndex;

            if (distance === 0) {
                item.classList.add('active');
            } else if (distance === 1) {
                item.classList.add('behind-1');
            } else if (distance === 2) {
                item.classList.add('behind-2');
            } else if (distance === 3) {
                item.classList.add('behind-3');
            } else if (distance === 4) {
                item.classList.add('behind-4');
            } else {
                item.classList.add('hidden'); // Esconde itens que estão muito atrás ou na frente
            }

            // Garante que o z-index é aplicado no momento certo para a transição
            // Invertemos a ordem do z-index para que as cartas "behind" fiquem por baixo
            if (index === currentIndex) {
                item.style.zIndex = totalItems + 1; // Ativo sempre na frente
            } else if (index > currentIndex) {
                item.style.zIndex = totalItems - distance; // Itens atrás do ativo (menor z-index)
            } else { // Itens que já passaram e estão "na frente" do ativo (loop)
                item.style.zIndex = totalItems - (totalItems - Math.abs(distance)); // Ainda visíveis mas com menor z-index
            }
        });
    }

    // Função para gerar os pontos de navegação
    function createDots() {
        dotsContainer.innerHTML = ''; // Limpa os pontos existentes
        carouselItems.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === currentIndex) {
                dot.classList.add('active');
            }
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateCarouselItems();
                updateDots();
            });
            dotsContainer.appendChild(dot);
        });
    }

    // Função para atualizar o estado ativo dos pontos
    function updateDots() {
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // Event Listener para o botão "Próximo"
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalItems; // Loop infinito
        updateCarouselItems();
        updateDots();
    });

    // Event Listener para o botão "Anterior"
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Loop infinito reverso
        updateCarouselItems();
        updateDots();
    });

    // Inicializa o carrossel ao carregar a página
    createDots();
    updateCarouselItems(); // Aplica as classes iniciais
});