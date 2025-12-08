// Configuração do Reveal para Responsividade Total
Reveal.initialize({
    controls: false, // Esconde setas padrão (o foco é o app)
    progress: false,
    center: true,
    hash: false,
    transition: 'slide',
    // Importante: Permite que o slide ocupe a tela toda sem forçar aspect ratio fixo
    width: "100%",
    height: "100%",
    margin: 0,
    minScale: 1,
    maxScale: 1
});

// Lógica jQuery
$(document).ready(function() {
    var step = 0;
    var titles = [
        "Carregar fase: RESERVA (2/4)", 
        "Carregar fase: EMPENHO (3/4)", 
        "Carregar fase: LIQUIDAÇÃO (4/4)", 
        "Fluxo concluído! ✅"
    ];

    // 1. Botão de Carregar (Lógica do Feed)
    $('#btnLoadMore').click(function() {
        step++;
        
        if (step <= 4) {
            var card = $('#post' + step);
            
            // Mostra o card
            card.show(); 
            
            // Scroll suave automático para o novo post
            // Detecta se é celular (div #feedArea) ou desktop e faz o scroll no lugar certo
            var container = $('#feedArea');
            container.animate({
                scrollTop: container.prop("scrollHeight")
            }, 800);

            // Atualiza o texto do botão
            if (step < 4) {
                $(this).text("🔔 " + titles[step-1]);
            } else {
                $(this).slideUp(); // Some o botão no final
                $('#endMessage').fadeIn();
            }
        }
    });

    // 2. Copiar Código (Toast Notification)
    $('.report-badge').click(function() {
        var code = $(this).text();
        navigator.clipboard.writeText(code);
        
        // Exibe mensagem flutuante
        $('#toast').text("Código " + code + " copiado!").fadeIn().delay(1500).fadeOut();
        
        // Feedback visual no botão
        $(this).css('background-color', '#d1e7dd').css('color', '#0f5132');
        var self = $(this);
        setTimeout(function(){
            self.css('background-color', '#e7f3ff').css('color', '#1877f2');
        }, 300);
    });

    // 3. Efeito de Curtir
    $('.action-btn').click(function() {
        if($(this).text().includes('Curtir') || $(this).text().includes('Amei') || $(this).text().includes('Útil')) {
            $(this).css('color', '#e0245e').css('font-weight', 'bold');
        }
    });
});
