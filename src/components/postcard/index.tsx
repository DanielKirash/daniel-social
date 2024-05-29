import React, { useContext } from 'react';
import './style.css'
import { AppContext } from '../../context/AppContext';



function Cards() {
    const context = useContext(AppContext)

    
  return (

   <div className='cards'>
        <div className='title'>titolo carta</div>
        <div className='body'>Contenuto della carta</div>
        <div className='likes'>
            <div className='like'>100</div>
            <div className='comments'>100</div>
        </div>
   </div>
  );
}

export default Cards;
