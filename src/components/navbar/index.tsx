import React, { useContext } from 'react';
import './style.css'
import { AppContext } from '../../context/AppContext';

function Navbar() {

    const context = useContext(AppContext)

    function controlCheck(){
        if(context?.checked === false){
            context.setChecked(true)
        }else{
            context?.setChecked(false)
        }
    }

  return (
    <div className='customNnav' style={{display:'flex', flexDirection:"row",backgroundColor:"#5A8FD8"}}>
        <h1 className='sname'>ConnettiME</h1>
        <div>
            <button className='add' onClick={controlCheck}>Aggiungi Post</button>
        </div>
    </div>
  );
}

export default Navbar;
