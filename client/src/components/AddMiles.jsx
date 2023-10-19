import React from 'react';
import {useState, useRef} from 'react';

import ModalWindow from './ModalWindow.jsx';
import ErrorBar from './ErrorBar.jsx';

import axios from 'axios';

export default function AddMiles ({id_Vehicles, setCloseState}){

  return (
    <ModalWindow setCloseState={setCloseState}>
      <Header/>
      <Body id_Vehicles={id_Vehicles} setCloseState={setCloseState}/>
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

function Body ({id_Vehicles, setCloseState}){

  var [error, setError] = useState('');

  var submitMileage = ()=>{
    //get data
    var MileageEntry = {
      id_Vehicles: id_Vehicles,
      dateAdded: new Date(),
      dateOccured: document.getElementById('dateOccuredInput').value,
      mileage: document.getElementById('mileageInput').value
    }

    //validate data
    if (!MileageEntry.mileage){
      setError('Please enter mileage');
    } else if (!MileageEntry.dateOccured || new Date(MileageEntry.dateOccured) > new Date()){
      setError('Please enter a valid date');
    } else {
      setError('');

      //post data
      axios.post(`/vehicles/${id_Vehicles}/data/miles`, MileageEntry)
      .then((response)=>{
        setCloseState(false);
        document.location.reload();
      })
      .catch((err)=>{
        setError(err.response.data);
        console.log(err);
      });

    }
  };

  return (
    <>
    <form className='flexColumn form'>
      <input id='dateOccuredInput'name='dateOccured' type='date' placeholder='Date' max={new Date().toISOString().slice(0,-14)} ></input>
      <input id='mileageInput' name='mileage' type='number' pattern="[0-9]" placeholder='Current Miles' min={1} autoComplete='off' required></input>
      <button type='button' className='green' onClick={submitMileage}>Submit</button>
    </form>
    {error && <ErrorBar>{error}</ErrorBar>}
    </>

  )
}



