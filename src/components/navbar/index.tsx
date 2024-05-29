import React, { useContext } from "react";
import "./style.css";
import { AppContext } from "../../context/AppContext";

function Navbar() {
//uso context per ottenere lo stato e le funzioni da AppContext
  const context = useContext(AppContext);

  //funzione per invertire lo stato di checked
  function controlCheck() {
    //se checked è falso imposta vero altrimenti imposta falso 
    if (context?.checked === false) {
      context.setChecked(true);
    } else {
      context?.setChecked(false);
    }
  }

  return (
    //NavBar constile inline per evitare problema di css nella build 
    <div
      className="customNnav"
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#5A8FD8",
        justifyContent: "space-between",
        borderRadius: "10px",
        alignItems: "center",
      }}
    >
      <h1 className="sname">ConnettiME</h1> {/*Nome del social */}
      <div>
        <button                     
          className="add"
          onClick={controlCheck}    //Richiama funzione settare lo stato di checked
          style={{
            backgroundColor: "#A4D3B3",
            marginRight: "20px",
            borderRadius: "5px",
            border: "none",
            fontSize: "20px",
            color: "white",
            padding: "10px 20px",
            cursor: "pointer",
            transition:
              "background-color 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease",
            boxShadow: "box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); ", //inline perchè in css non funziona
          }}
        >
          Aggiungi Post
        </button>           {/*Pulsante per aggiungere nuovo post*/}
      </div>
    </div>
  );
}

export default Navbar;
