import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Cards from './components/postcard';
import { Tpost } from './types.ts/commontypes';
import { AppContext } from './context/AppContext';

function App() {
  const[jsonData , setJsonData] = useState<Tpost[]>()

  const PropTypes = {jsonData, setJsonData}


  useEffect(() => {           //Utilizzo useEffect per eseguire una sola volta il comando a fine render
    fetch('https://dummyjson.com/posts')
      .then(response => response.json())
      .then(json => setJsonData(json.posts))    //Imposto jsonData
      .catch(error => console.error('Errore durante il fetch dei dati:', error));  
  },[])

  
  return (
    <AppContext.Provider value={PropTypes}>
      <div>
        <Navbar />
        <Cards />
      </div>
    </AppContext.Provider>
  );
}

export default App;
