import React from 'react';

export default function Reminders(){
  return (
    <div className='card'>
      <Header/>
    </div>
  );
};


function Header (){
  return (
    <div className='cardHeader' >
      <h2>Reminders</h2>
    </div>
  )
}