import React, { useContext } from "react";
import "./style.css";
import { AppContext } from "../../context/AppContext";

function Cards() {
  //Utilizzo il context per ottenere dati e funzioni dallo stato globale
  const context = useContext(AppContext);
  //Estraggo i dati Json dal context
  const jsonData = context?.jsonData;

  return (
    //Contenitore per TUTTE le cards
    <div className="allCards">
      {/*Se jsonData esiste utilizzo funzione map per passare i dati alle card*/}
      {jsonData &&
        jsonData.map((item, index) => (
          <div className="cards" key={index}>
            <div className="title">{item.title}</div>
            <div className="body">{item.body}</div>
            <div className="likes">
              <div className="views">👁️ {item.views}</div>
              <div className="like"><div className="textPulse">❤️ {item.reactions.likes}</div></div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Cards;
