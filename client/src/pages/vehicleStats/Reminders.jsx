import React from 'react';
import Table from '../../components/Table.jsx'

export default function Reminders(){
  return (
    <div className='card'>
      <Header/>
      <Table labels={['Name', 'Miles', 'Date']} data={[{Name:'Oil Change',Miles: '115453', Date:'4/30/04'}]}/>
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
