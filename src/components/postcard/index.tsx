import React, { useContext } from 'react';
import './style.css'
import { AppContext } from '../../context/AppContext';



function Cards() {
    const context = useContext(AppContext)
    const jsonData = context?.jsonData
    
  return (

    <div className='allCards'>
        {jsonData && jsonData.map((item, index) => (
            <div className='cards' key={index}>
                <div className='title'>{item.title}</div>
                <div className='body'>{item.body}</div>
                <div className='likes'>
                    <div className='views'>👁️ {item.views}</div>
                    <div className='like'>❤️ {item.reactions.likes}</div>
                </div>
           </div>
        ))}
    </div>


//    <div className='cards'>
//         <div className='title'>titolo carta</div>
//         <div className='body'>Contenuto della carta</div>
//         <div className='likes'>
//         <div className='like'>100</div>
//         <div className='comments'>100</div>
//         </div>
//    </div>
  );
}

export default Cards;
