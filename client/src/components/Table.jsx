import React from 'react';

export default function Table (){
  return (
    <table className='table center'>
      <Labels />
      <Reminder data={{name: 'Oil'}}/>
      <Reminder data={{name: 'Brake Pads'}}/>
      <Reminder data={{name: 'Tires'}}/>

    </table>
  )
}

function Labels ({label}){
  return (
    <tr className='tableLabels'>
      <th style={{'width':'50%', 'text-align': 'left'}}>Name</th>
      <th>Miles</th>
      <th>Date</th>
    </tr>
  )
}

function Reminder ({data}){
  return (
    <tr className='tableEntry' >
      <td>{data.name}</td>
      <td>134542</td>
      <td>4/14/23</td>
    </tr>
  )
}