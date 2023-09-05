import React from 'react';

export default function ModalWindow ({children, onClose}){
  return (
    <div className='modalBase' id='modalBase' onClick={onClose}>
      <div className='card modalWindow flexColumn' style={{width: '40vw'}}>
        {children}
      </div>
    </div>
  )
};