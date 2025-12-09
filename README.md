# 📊 Treinamento Interativo: Execução Financeira (SMARAPD)

> Um treinamento responsivo e gamificado sobre o fluxo de Despesa Pública (LOA, Reserva, Empenho e Liquidação), simulando uma interface de Rede Social.

![Status do Projeto](https://img.shields.io/badge/Status-Concluído-success)
![Tecnologias](https://img.shields.io/badge/Tech-HTML%20%7C%20CSS%20%7C%20jQuery%20%7C%20Reveal.js-blue)

## 🎯 Sobre o Projeto

Este projeto transforma uma apresentação técnica de contabilidade pública em uma experiência interativa. Ao invés de slides estáticos, o usuário navega por um **"Feed de Notícias" (FinançasNet)**.

O objetivo é ensinar os códigos de relatórios do sistema SMARAPD (ex: `CER02900`, `CER45000`) de forma didática e visual.

### ✨ Funcionalidades

* **📱 Design Responsivo Universal:**
    * **Desktop:** Layout de 3 colunas (Menu, Feed, Widgets) estilo Facebook/LinkedIn.
    * **Mobile:** Transforma-se automaticamente em um App de tela cheia.
* **🖱️ Navegação Intuitiva:** Clique em qualquer lugar da tela para avançar o fluxo ou carregar novos posts.
* **📋 Interatividade:**
    * Clique nos códigos de relatório (`Badges Azuis`) para copiar automaticamente para a área de transferência.
    * Botões de "Curtir" e "Ação" com feedback visual.
* **🎓 Conteúdo Didático:** Cobre o fluxo completo: Agenda, LOA, Reserva, Empenho e Liquidação.

---

## 🚀 Como Executar

Este é um projeto estático (Front-end), o que significa que não requer instalação de servidores ou banco de dados.

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/SEU-USUARIO/NOME-DO-REPO.git](https://github.com/SEU-USUARIO/NOME-DO-REPO.git)
    ```
2.  **Abra o arquivo:**
    * Navegue até a pasta do projeto.
    * Dê um duplo clique no arquivo `index.html`.
    * O projeto abrirá no seu navegador padrão.

---

## 📂 Estrutura de Arquivos

```text
/
├── index.html      # Estrutura do Feed e conteúdo dos posts
├── style.css       # Estilização, responsividade e layout do "App"
├── script.js       # Lógica de navegação, cliques e animações (jQuery + Reveal.js)
├── images/         # (Opcional) Pasta para salvar seus prints e fotos
└── README.md       # Documentação do projeto

🖼️ Como Adicionar Imagens Reais
Atualmente, o projeto usa "Placeholders" (caixas cinzas) onde as imagens devem ficar. Para adicionar prints reais dos relatórios:

Salve sua imagem na pasta do projeto (ex: relatorio_reserva.png).

Abra o index.html.

Localize a div com a classe image-placeholder.

Substitua o bloco inteiro pela tag <img>.

<div class="post-image-container">
    <div class="image-placeholder">
        <span>Imagem Aqui</span>
    </div>
</div>

Depois (Com Imagem):
<div class="post-image-container">
    <img src="relatorio_reserva.png" alt="Print do Relatório">
</div>

🛠️ Tecnologias Utilizadas
Reveal.js: Framework base para a estrutura de apresentação.

HTML5 & CSS3: Para a construção do layout responsivo "FinançasNet".

jQuery: Para manipulação simplificada do DOM e animações de feed.

Font System: Fontes nativas do sistema operacional para performance máxima.

📢 Dica: Publicando no GitHub Pages
Você pode colocar esse treinamento online gratuitamente:

Suba os arquivos para o GitHub.

Vá em Settings > Pages.

Em Source, selecione a main branch.

O GitHub vai gerar um link (ex: seu-usuario.github.io/projeto) para você compartilhar com a equipe!

📝 Licença
Este projeto foi desenvolvido para fins educacionais. Sinta-se livre para usar e modificar.

Desenvolvido com 💙 para treinamento de Gestão Pública.
