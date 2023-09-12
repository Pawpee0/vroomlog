import React from 'react';
import {useState} from 'react';
import AddMiles from '../../components/AddMiles.jsx';

export default function Miles (){

  var [showAddMiles, setShowAddMiles] = useState(false);
  return (
    <div className='card'>
      <Header setShowAddMiles={setShowAddMiles}/>
      {showAddMiles && <AddMiles id_Vehicles={2} setCloseState={setShowAddMiles}/>}

    </div>
  )
}

function Header ({setShowAddMiles}){
  return (
    <div className='cardHeader flexRow' >
      <h2>Miles</h2>
      <AddMilesButton setShowAddMiles={setShowAddMiles}/>
    </div>
  );
}

function AddMilesButton ({setShowAddMiles}){
  return (
    <button type='button' className='green' onClick={()=>{setShowAddMiles(true)}}>
      <p>Add Miles</p>
    </button>
  )
};