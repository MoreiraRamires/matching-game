import CardGame from "../CardGame";

function CardFrontBack() {
  return /*html*/ `
    <article class="card-front-back">
      ${CardGame()}
      ${CardGame("javascript", "Logo do JavaScript")}
      ${CardGame("css", "Logo do CSS")}
    </article>
  `;
}

export default CardFrontBack;


// ===*Observações*===
// 
// 
// 