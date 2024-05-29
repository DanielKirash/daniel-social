import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Cards from './components/postcard';
import { Tpost } from './types.ts/commontypes';
import { AppContext } from './context/AppContext';
import Textarea from './components/textarea';

function App() {
  const[jsonData , setJsonData] = useState<Tpost[]>()
  const[checked, setChecked] = useState(false)

  const PropTypes = {jsonData, setJsonData, checked, setChecked}


  useEffect(() => {           //Utilizzo useEffect per eseguire una sola volta il comando a fine render
    fetch('https://dummyjson.com/posts')
      .then(response => response.json())
      .then(json => setJsonData(json.posts))    //Imposto jsonData
      .catch(error => console.error('Errore durante il fetch dei dati:', error));  
  },[])

  console.log(jsonData)
  return (
    <AppContext.Provider value={PropTypes}>   {/* Wrappo all'interno di AppContext navbar e cards */}
      <div>
        <Navbar />
        
        {!checked && <Cards />}

        {checked && <Textarea />}
      </div>
    </AppContext.Provider>
  );
}

export default App;
