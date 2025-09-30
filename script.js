function abrirCard(idCard) {
    // Esconde todos os conteúdos
    const conteudos = document.querySelectorAll('.content-area');
    conteudos.forEach(conteudo => {
        conteudo.classList.remove('active');
    });
    
    // Esconde os cards
    document.querySelector('.card-grid').style.display = 'none';
    
    // Mostra o conteúdo selecionado
    document.getElementById(idCard).classList.add('active');
    
    // Rola a página para o topo do conteúdo
    window.scrollTo({
        top: document.querySelector('.container').offsetTop,
        behavior: 'smooth'
    });
}

function voltarParaCards() {
    // Esconde todos os conteúdos
    const conteudos = document.querySelectorAll('.content-area');
    conteudos.forEach(conteudo => {
        conteudo.classList.remove('active');
    });
    
    // Mostra os cards novamente
    document.querySelector('.card-grid').style.display = 'grid';
    
    // Rola a página para o topo dos cards
    window.scrollTo({
        top: document.querySelector('.container').offsetTop,
        behavior: 'smooth'
    });
}

// Adiciona evento de teclado para melhor acessibilidade
document.addEventListener('keydown', function(event) {
    // Se pressionar ESC, volta para os cards
    if (event.key === 'Escape') {
        voltarParaCards();
    }
});

// Adiciona eventos de teclado para os cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach((card, index) => {
        // Permite navegação por teclado
        card.setAttribute('tabindex', '0');
        
        // Enter ou Space para ativar o card
        card.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                const cardId = this.getAttribute('onclick').match(/'([^']+)'/)[1];
                abrirCard(cardId);
            }
        });
    });
});

