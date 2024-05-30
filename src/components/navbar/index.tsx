import React, { useContext } from 'react';
import './style.css'
import { AppContext } from '../../context/AppContext';
import { hover } from '@testing-library/user-event/dist/hover';

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
    <div className='customNnav' style={{display:'flex', flexDirection:"row",backgroundColor:"#5A8FD8", justifyContent:"space-between", borderRadius:"10px", alignItems:"center"}}>
        <h1 className='sname'>ConnettiME</h1>
        <div>
            <button className='postadd' onClick={controlCheck} style={{backgroundColor:"#A4D3B3", marginRight:"20px",borderRadius:"5px",border:"none",fontSize:"20px",color:"white", padding:"10px 20px", cursor:"pointer", transition:"background-color 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease", boxShadow:"box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);"}}>Aggiungi Post</button>
        </div>
    </div>
  );
}

export default Navbar;
