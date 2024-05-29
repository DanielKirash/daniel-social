import React from 'react';
import './style.css'

function Navbar() {
  return (
    <div className='nav'>
        <h1 className='sname'>ConnettiME</h1>
        <div>
            <button className='add'>Aggiungi Post</button>
        </div>
    </div>
  );
}

export default Navbar;
