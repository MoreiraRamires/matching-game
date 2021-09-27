import "./style.css";

function CardGame (){


  return /*html*/`
  <article class="card-game">
    <img class="front-face" src="images/alura-pixel.png" alt="Logo da Alura">
    <img class="back-face" src="img/js-badge.svg" alt="Verso da Carta">
  </article>

  `
}
export default CardGame;

// similar ao JSX do nosso react 
//os componentes são isolados para facilitar a sua reutilização.