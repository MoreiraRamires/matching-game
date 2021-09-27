import "./style.css";

function CardGame (icon = "alura-pixel", alt = 'Logo da Alura'){


  return /*html*/`
  <article class="card-game">
    <img class="front-face" src="images/${icon}.png" alt="${alt}">
  </article>

  `
}
export default CardGame;

// similar ao JSX do nosso react 
//os componentes são isolados para facilitar a sua reutilização.