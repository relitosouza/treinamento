// Configuração do Reveal.js
Reveal.initialize({
    controls: false, // Sem setas
    progress: false,
    center: true,
    hash: false,
    transition: 'slide',
    width: "100%",
    height: "100%",
    margin: 0,
    minScale: 1,
    maxScale: 1
});

$(document).ready(function() {
    
    // Variáveis de Estado do Feed
// No script.js
    var step = 0;
    var totalSteps = 5; // MUDOU PARA 5

    var titles = [
        "Carregar fase: FLUXO GERAL (2/5)", 
        "Carregar fase: RESERVA (3/5)",
        "Carregar fase: EMPENHO (4/5)", 
        "Carregar fase: LIQUIDAÇÃO (5/5)", 
        "Fluxo concluído! ✅"
    ];

    // --- FUNÇÃO PARA CARREGAR O PRÓXIMO POST ---
    function loadNextPost() {
        step++;
        
        if (step <= totalSteps) {
            var card = $('#post' + step);
            
            // Exibe o card
            card.show(); 
            
            // Scroll suave para mostrar o novo post
            var container = $('#feedArea');
            container.animate({
                scrollTop: container.prop("scrollHeight")
            }, 800);

            // Atualiza texto da barra de status
            if (step < totalSteps) {
                $('#btnLoadMore').text("🔔 " + titles[step-1]);
            } else {
                $('#btnLoadMore').slideUp();
                $('#endMessage').fadeIn();
            }
        }
    }

    // --- CLIQUE GLOBAL NA TELA (NAVEGAÇÃO) ---
    $(document).click(function(event) {
        
        // 1. Ignora se clicar em botões interativos
        if ($(event.target).closest('.action-btn, .report-badge, .menu-item, .widget').length) {
            return; 
        }

        // 2. Verifica contexto
        var currentSlide = Reveal.getCurrentSlide();
        
        // SE: Capa (Slide 1) -> Avança
        if ($(currentSlide).find('.intro-box').length > 0) {
            Reveal.next(); 
        }
        
        // SE: App (Slide 2) -> Carrega Post
        else if ($(currentSlide).find('.app-container').length > 0) {
            if (step < totalSteps) {
                loadNextPost();
            }
        }
    });

    // --- INTERAÇÕES ---
    
    // Copiar Código
    $('.report-badge').click(function() {
        var code = $(this).text();
        navigator.clipboard.writeText(code);
        $('#toast').text("Código " + code + " copiado!").fadeIn().delay(1500).fadeOut();
        
        $(this).css('background-color', '#d1e7dd').css('color', '#0f5132');
        var self = $(this);
        setTimeout(function(){
            self.css('background-color', '#e7f3ff').css('color', '#1877f2');
        }, 300);
    });

    // Curtir
    $('.action-btn').click(function() {
        var text = $(this).text();
        if(text.includes('Curtir') || text.includes('Amei') || text.includes('Útil') || text.includes('Confirmar')) {
            if ($(this).css('color') === 'rgb(101, 103, 107)') { 
                $(this).css('color', '#e0245e').css('font-weight', 'bold'); 
            } else {
                $(this).css('color', '#65676b').css('font-weight', '600'); 
            }
        }
    });

});
