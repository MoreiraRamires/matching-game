import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";

import PlayerName from "./src/components/PlayerName";
import BoardGame from "./src/objects/BoardGame";

const $root = document.querySelector("#root");

$root.insertAdjacentHTML(
  "beforeend",
  `
    ${PlayerName("Rafael")}
    ${PlayerName("Isa")}
    ${BoardGame(6)}
  `
);

  // Flip
  const cardsGames = document.querySelectorAll('.card-game');

  function flipCard() {
    this.classList.toggle('flip');
  }
  
  cardsGames.forEach(card => card.addEventListener('click', flipCard));
  

// ===*Observações*===
// toda variavel que começa com $ guarda uma referencia, um elemento da tela
// RSCSS padrão de arquitetura utilizada em nosso projeto
// Não ao usar o innerHTML confira o MDN , use o insertAdjacentHTML