import React from 'react';

export default function ModalWindow ({children, setCloseState}){
  return (
    <div className='modalBase' id='modalBase' onClick={(e)=>{if(e.target === document.getElementById("modalBase")){setCloseState(false)} }}>
      <div className='card modalWindow flexColumn' style={{width: '40vw'}}>
        {children}
      </div>
    </div>
  )
};