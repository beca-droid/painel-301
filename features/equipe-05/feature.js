/* =====================================================================
   EQUIPE 05
   ---------------------------------------------------------------------
   Este arquivo é SÓ DA SUA EQUIPE. Ninguém mais vai mexer nele,
   então você pode trabalhar sem medo de atrapalhar os colegas.

   REGRA IMPORTANTE: todo id que você criar deve terminar com -05
   (exemplo: id="botao-05"). Isso evita que o seu card brigue com o
   card de outra equipe, porque todos vivem na mesma página.

   O código abaixo JÁ FUNCIONA. Rode o site, veja ele na tela e vá
   trocando as partes aos poucos até virar a sua feature.
   ===================================================================== */

registrarCard({

  // ---- 1. Identificação (troque pelos dados da sua equipe) ----
  equipe: "05",
  titulo: "Contador de Cliques",
  integrantes: ["Anne", "Mirelly"],
  icone: "fa-solid fa-star",   // procure outro em fontawesome.com/icons

  // ---- 2. O que aparece dentro do card ----
   // 2. O que aparece dentro do card ----
  montar(area) {

  
    area.style.transition = "background-color 0.4s ease, color 0.4s ease";
    area.style.display = "flex";
    area.style.flexDirection = "column";
    area.style.alignItems = "center";
    // 2.1 - O HTML do seu card.
    area.innerHTML = `
    <link rel="stylesheet" href="https://googleapis.com">
      <style>
        /* Força os elementos a usarem a Noto Serif Display (Alternativa gratuita à Pandyra) */
        #visor-05, #botao-05, #visor-05 ~ p, area p {
          font-family: 'Noto Serif Display', serif !important;
          font-weight: 300 !important; /* Deixa as linhas bem finas e delicadas */
          letter-spacing: 0.5px;      /* Dá um leve espaçamento elegante entre as letras */
        }
          #botao-05:hover {
          transform: scale(1.1) !important; /* Aumenta em 10% o tamanho */
      </style>
      <p><B>Clique no botão e veja o tema mudar!</B></p>
      <p class="visor" id="visor-05">Tema Claro Ativado</p>
      <button class="btn" id="botao-05">Claro</button>
    `;

    // 2.2 - Pegando os elementos que acabamos de criar.
    const visor = document.getElementById("visor-05");
    const botao = document.getElementById("botao-05");


    // 2.4 - O que acontece quando o usuário clica.
    botao.addEventListener('click', () => {
      if (botao.textContent === "Escuro") {
        botao.textContent = "Claro";
        
        // Estilos para o Tema Escuro
        area.style.backgroundColor = "#1e1e24"; // Fundo escuro
        area.style.color = "#ffffff";           // Texto branco
        visor.textContent = "Tema Escuro Ativado";
         botao.style.backgroundColor = "#f8a9ff"; // Botão Roxo no escuro
        botao.style.boxShadow = "0 0 20px rgba(212, 123, 208, 0.8)"; // Glow Roxo
          botao.style.color = "#000000";
      } else {
        botao.textContent = "Escuro";
        
        
        // Estilos para o Tema Claro (Padrão)
        area.style.backgroundColor = "#ffffff"; // Fundo branco
        area.style.color = "#000000";           // Texto preto
        visor.textContent = "Tema Claro Ativado";
        botao.style.backgroundColor = "#1e1e24"; 
        botao.style.color = "#ffffff";
        botao.style.boxShadow = "0 0 18px rgba(61, 48, 46, 0.8)"; // Brilho visível

      }
    });

  }
})
