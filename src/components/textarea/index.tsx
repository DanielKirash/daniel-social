import React, { useContext, useState } from 'react';
import './style.css'
import { AppContext } from '../../context/AppContext';
import { Tpost } from '../../types.ts/commontypes';

function Textarea() {
    const[title, setTitle] = useState("")
    const[content, setContent] = useState("")
    
  const context = useContext(AppContext)  
    
    function handleClick(){
        if(context?.jsonData){
            const obj = {
                userID: context.jsonData.length+1,
                title: title,
                body: content,
                id: context.jsonData.length+1,
                views: 0,
                reactions: {likes:0, dislike:0}
            }
            context.jsonData.push(obj)
            console.log(context.jsonData)
        }
    }

    function controlCheck(){
        context?.setChecked(false)
    }

  return (
    <div className='textarea'>
        
        <textarea placeholder='Inserisci il titolo del post' id='title' onChange={(e)=> setTitle(e.target.value)}></textarea>
        <textarea placeholder='Inserisci il contenuto del post' id='content' onChange={(e) => setContent(e.target.value)}></textarea>
        <div>
            <button className='postadd' onClick={()=>{handleClick(); controlCheck();}}>
                Pubblica
            </button>
        </div>
    </div>
  );
}

export default Textarea;
