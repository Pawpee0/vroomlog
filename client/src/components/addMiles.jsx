import React from 'react';
import {useRef} from 'react';

import ModalWindow from './ModalWindow.jsx';

import axios from 'axios';

export default function AddMiles ({id_Vehicles, setCloseState}){

  return (
    <ModalWindow setCloseState={setCloseState}>
      <Header/>
      <Body id_Vehicles={id_Vehicles}/>
    </ModalWindow>
  );
};

function Header (){
  return (
    <div className='cardHeader'>
      <h2>Add Miles</h2>
    </div>
  )
};

function Body ({id_Vehicles}){

  var MileageEntry = useRef({
    id_Vehicles: id_Vehicles,
    dateAdded: new Date().toISOString()
  });

  var updateMileageEntry = (e)=>{
    MileageEntry.current[e.target.name] = e.target.value;
  }

  var submitMileage = ()=>{
    MileageEntry.current.dateOccured = MileageEntry.current.dateOccured.concat('T00:00:00Z');
    console.log(MileageEntry.current);
    axios.post(`/vehicles/${id_Vehicles}/data/miles`, MileageEntry.current)
    .then((response)=>{
      console.log(response);
    })
    .catch((err)=>{
      console.log(err);
    });
  };

  return (
    <form className='flexColumn form'>
      <input name='dateOccured' type='date' max={new Date().toISOString().slice(0,-14)} onChange={updateMileageEntry}></input>
      <input name='mileage' type='number' placeholder='Miles Traveled' min={1} onChange={updateMileageEntry}></input>
      <button type='button' className='green' onClick={submitMileage}>Submit</button>
    </form>
  )
}



