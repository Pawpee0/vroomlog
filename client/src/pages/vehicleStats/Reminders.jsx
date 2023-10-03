import React from 'react';
import Table from '../../components/Table.jsx'

export default function Reminders(){

  var labels = [
    {title: 'Name', key:'name'},
    {title: 'Miles', key:'miles'},
    {title: 'Date', key:'date'}
  ];
  return (
    <div className='card'>
      <Header/>
      <Table labels={labels} data={[{name:'Oil Change',miles: '115453', date:'4/30/04'}]}/>
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
