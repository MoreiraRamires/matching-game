
import "./style.css";

function PlayerName(content) {
  return /*html*/ `
    <p class="player-name">${content}</p>
  `;
}

export default PlayerName;
// similar ao JSX do nosso react 
//os componentes são isolados para facilitar a sua reutilização.