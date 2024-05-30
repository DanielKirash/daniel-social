import React, { useContext, useState } from "react";
import "./style.css";
import { AppContext } from "../../context/AppContext";
import { Tpost } from "../../types.ts/commontypes";
import Comp from "../card";



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
          <div key={index}>
            <Comp element={item} />
          </div>
        ))}
    </div>
  );
}

export default Cards;
