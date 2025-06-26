    const perguntas = document.querySelectorAll('.faq-pergunta');

    perguntas.forEach(pergunta => {
        pergunta.addEventListener('click', () => {
            const resposta = pergunta.nextElementSibling;
            resposta.style.maxHeight = resposta.style.maxHeight ? null : resposta.scrollHeight + 'px';
        });
    });
   

    document.addEventListener('DOMContentLoaded', () => {
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dotsContainer = document.querySelector('.dots-container');

    let currentIndex = 0;
    const totalItems = carouselItems.length;

    function updateCarouselItems() {
        carouselItems.forEach((item, index) => {
            item.classList.remove('active', 'behind-1', 'behind-2', 'behind-3', 'behind-4', 'hidden');

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
                item.classList.add('hidden'); 
            }


            if (index === currentIndex) {
                item.style.zIndex = totalItems + 1; 
            } else if (index > currentIndex) {
                item.style.zIndex = totalItems - distance; 
            } else { 
                item.style.zIndex = totalItems - (totalItems - Math.abs(distance)); 
            }
        });
    }

    
    function createDots() {
        dotsContainer.innerHTML = ''; 
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

   
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalItems; 
        updateCarouselItems();
        updateDots();
    });

  
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarouselItems();
        updateDots();
    });

    createDots();
    updateCarouselItems();
});