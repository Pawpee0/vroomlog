import React from 'react';
import {useState, useRef} from 'react';

import ModalWindow from './ModalWindow.jsx';
import ErrorBar from './ErrorBar.jsx';

import axios from 'axios';

export default function AddMiles ({id_Vehicles, setCloseState}){

  if (setCloseState === undefined) {
    return (
      <div className='card'>
        <Header/>
        <Body id_Vehicles={id_Vehicles} setCloseState={setCloseState}/>
      </div>
    )
  } else {
    return (
      <ModalWindow setCloseState={setCloseState}>
        <Header/>
        <Body id_Vehicles={id_Vehicles} setCloseState={setCloseState}/>
      </ModalWindow>
    );
  }


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
  var spamProtection = false;

  var submitMileage = ()=>{
    //get data
    var MileageEntry = {
      id_Vehicles: id_Vehicles,
      dateAdded: new Date(),
      dateOccured: document.getElementById('dateOccuredInput').value,
      mileage: document.getElementById('mileageInput').value
    }

    //reset errors
    document.getElementById('mileageInput').className = '';
    document.getElementById('dateOccuredInput').className = '';
    setError('');

    //validate data
    if (!MileageEntry.mileage || MileageEntry.mileage < 1){
      document.getElementById('mileageInput').className = 'error';
      setError('Please enter a valid mileage');
    }if (!MileageEntry.dateOccured || new Date(MileageEntry.dateOccured) > new Date()){
      document.getElementById('dateOccuredInput').className = 'error';
      setError('Please enter a valid date');
    } else if (error === '' && !spamProtection){
      spamProtection = true;

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
    <form className='cardBody flexColumn'>
      <input id='dateOccuredInput'name='dateOccured' type='date' placeholder='Date' max={new Date().toISOString().slice(0,-14)} ></input>
      <input id='mileageInput' name='mileage' type='number' pattern="[0-9]" placeholder='Current Miles' min={1} autoComplete='off' required></input>
    </form>
    <div className='cardFooter'>
      <button type='button' className='green' onClick={submitMileage}>Submit</button>
    </div>
    {error && <ErrorBar>{error}</ErrorBar>}
    </>

  )
}



