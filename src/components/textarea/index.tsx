import React, { useContext, useState } from "react";
import "./style.css";
import { AppContext } from "../../context/AppContext";

function Textarea() {
  //Definisco stati locali per settare titolo e contenuto
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  //Recupero il contesto dell'AppContext
  const context = useContext(AppContext);

  //Funzione per gestire il click sul pulsante "postadd"
  function handleClick() {
    if (context?.jsonData) {
      const obj = {
        //Creo oggetto post con dati predefiniti e presi da content e body
        userID: context.jsonData.length + 1,
        title: title,
        body: content,
        id: context.jsonData.length + 1,
        views: 0,
        reactions: { likes: 0, dislike: 0 },
      };

      //Aggiungo il nuovo post all'array JsonData (grazie al context)
      context.jsonData.push(obj);
    }
  }

  //Funzione per chiudere la textarea e visualizzare di nuovo le cards una volta pubblicato il post
  function controlCheck() {
    context?.setChecked(false);
  }

  return (
    //contenitore delle textarea
    <div className="textarea">
      <textarea
        placeholder="Inserisci il titolo del post"
        id="title"
        onChange={(e) => setTitle(e.target.value)} //Aggiorno lo stato di title quando digito
      ></textarea>
      <textarea
        placeholder="Inserisci il contenuto del post"
        id="content"
        onChange={(e) => setContent((e.target.value))} //Aggiorno lo stato di body quando digito
      ></textarea>
      <div>
        <button
          className="postadd"
          onClick={() => {
            handleClick(); //esegue inseriemtno del nuovo post
            controlCheck(); //chiude la textarea
          }}
        >
          Pubblica
        </button>
      </div>
    </div>
  );
}

export default Textarea;
