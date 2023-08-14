import React from 'react';

export default function Miles (){
  return (
    <div className='card' style={{'margin': '1rem'}}>
      <Header/>
    </div>
  )
}

function Header (){
  return (
    <div className='cardHeader' >
      <h2>Miles</h2>
    </div>
  );
}