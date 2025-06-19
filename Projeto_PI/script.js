    const perguntas = document.querySelectorAll('.faq-pergunta');

    perguntas.forEach(pergunta => {
        pergunta.addEventListener('click', () => {
            const resposta = pergunta.nextElementSibling;
            resposta.style.maxHeight = resposta.style.maxHeight ? null : resposta.scrollHeight + 'px';
        });
    });
    //para abrir os accordions