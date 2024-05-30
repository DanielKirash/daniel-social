import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Cards from "./components/postcard";
import { Tpost } from "./types.ts/commontypes";
import { AppContext } from "./context/AppContext";
import Textarea from "./components/textarea";

function App() {
  const [jsonData, setJsonData] = useState<Tpost[]>(); //useState per settare jsonData
  const [checked, setChecked] = useState(false); //useState per settare checked per il controllo

  //setto i propTypes da passare in appcontext
  const PropTypes = { jsonData, setJsonData, checked, setChecked };

  useEffect(
    () => {
      //Utilizzo useEffect per eseguire una sola volta il comando a fine render
      fetch("https://dummyjson.com/posts")
        .then((response) => response.json())
        .then((json) => setJsonData(json.posts)) //Imposto jsonData
        .catch((error) =>
          console.error("Errore durante il fetch dei dati:", error)
        ); //in caso di errore console.log
    },
    [
      /*Effettua una sola volta*/
    ]
  );

  return (
    //Wrappo all'interno di AppContext navbar e cards
    <AppContext.Provider value={PropTypes}>
      
        <Navbar />
        {!checked && <Cards />}{" "}
        {/* Se checked è false allora !checked è true, quindi Cards sarà renderizzato*/}
        {checked && <Textarea />} {/*Se checked e true sarà renderizzato*/}
   
    </AppContext.Provider>
  );
}

export default App;
