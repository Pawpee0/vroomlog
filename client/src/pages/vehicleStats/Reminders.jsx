import React from 'react';
import Table from '../../components/Table.jsx'

export default function Reminders(){
  return (
    <div className='card'>
      <Header/>
      <Table />
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
