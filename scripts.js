// Configuração do Reveal.js
Reveal.initialize({
    controls: false, // Esconde as setas padrão (usaremos nossos botões)
    progress: false, // Esconde barra de progresso
    center: true,
    hash: false,
    transition: 'slide',
    
    // Configurações cruciais para que o "App" ocupe a tela toda sem deformar
    width: "100%",
    height: "100%",
    margin: 0,
    minScale: 1,
    maxScale: 1
});

$(document).ready(function() {
    
    // --- 1. LÓGICA DA CAPA (SLIDE 1) ---
    // Ao clicar no botão "Iniciar App", vai para o próximo slide
    $('#btnStart').click(function() {
        Reveal.next();
    });

    // --- 2. LÓGICA DO FEED (SLIDE 2) ---
    var step = 0;
    var titles = [
        "Carregar fase: RESERVA (2/4)", 
        "Carregar fase: EMPENHO (3/4)", 
        "Carregar fase: LIQUIDAÇÃO (4/4)", 
        "Fluxo concluído! ✅"
    ];

    // Botão "Carregar Próxima Fase"
    $('#btnLoadMore').click(function() {
        step++;
        
        if (step <= 4) {
            var card = $('#post' + step);
            
            // Exibe o card
            card.show(); 
            
            // Scroll suave para o final do feed
            var container = $('#feedArea');
            container.animate({
                scrollTop: container.prop("scrollHeight")
            }, 800);

            // Atualiza o texto do botão ou finaliza
            if (step < 4) {
                $(this).text("🔔 " + titles[step-1]);
            } else {
                $(this).slideUp(); // Some o botão
                $('#endMessage').fadeIn(); // Mostra mensagem final
            }
        }
    });

    // --- 3. INTERAÇÕES DE UI ---
    
    // Copiar Código ao clicar
    $('.report-badge').click(function() {
        var code = $(this).text();
        navigator.clipboard.writeText(code);
        
        // Exibe Toast Notification
        $('#toast').text("Código " + code + " copiado!").fadeIn().delay(2000).fadeOut();
        
        // Efeito visual de clique
        $(this).css('background-color', '#d1e7dd').css('color', '#0f5132');
        var self = $(this);
        setTimeout(function(){
            self.css('background-color', '#e7f3ff').css('color', '#1877f2');
        }, 300);
    });

    // Botões de Ação (Curtir/Comentar)
    $('.action-btn').click(function() {
        var text = $(this).text();
        
        // Lógica simples de Toggle (Ativar/Desativar)
        if(text.includes('Curtir') || text.includes('Amei') || text.includes('Útil')) {
            if ($(this).css('color') === 'rgb(101, 103, 107)') { // Se for cinza
                $(this).css('color', '#e0245e').css('font-weight', 'bold'); // Vira rosa/vermelho
            } else {
                $(this).css('color', '#65676b').css('font-weight', '600'); // Volta para cinza
            }
        }
    });
});
