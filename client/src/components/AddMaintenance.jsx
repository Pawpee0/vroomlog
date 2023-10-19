import React from 'react';
import {useState, useRef} from 'react';

import ModalWindow from './ModalWindow.jsx';
import ErrorBar from './ErrorBar.jsx';

import axios from 'axios';

export default function AddMaintenance ({id_Vehicles, setCloseState}){

  return (
    <ModalWindow setCloseState={setCloseState}>
      <Header/>
      <Body id_Vehicles={id_Vehicles} setCloseState={setCloseState}/>
    </ModalWindow>
  )
}

function Header (){
  return (
    <div className = 'cardHeader'>
      <h2>Add Maintenance</h2>
    </div>
  )
}

function Body ({id_Vehicles, setCloseState}){

  var [error, setError] = useState('');

  var postData = async ()=>{
    //collect the data
    var MaintenanceEntry = {
      id_Vehicles: id_Vehicles,
      dateAdded: new Date(),
      name: document.getElementById('nameInput').value,
      description: document.getElementById('descriptionInput').value,
      mileage: document.getElementById('mileageInput').value,
      dateOccured: document.getElementById('dateOccuredInput').value,
    }

    //validate data
    if (!MaintenanceEntry.name) {
      setError('Please name the maintenance done');
    } else if (!MaintenanceEntry.mileage || !MaintenanceEntry.dateOccured) {
      setError('Please enter the mileage or date when the work was done');
    } else {
      var response = await axios.post(`/vehicles/${id_Vehicles}/data/maintenance`, MaintenanceEntry);
      setCloseState(false);
      window.location.reload();
    }

  };



  return (
    <>
    <form className='cardBody flexColumn'>
      <input id='nameInput' name='name' type='text' placeholder='Name' autoComplete='off'></input>
      <textarea id='descriptionInput' name='description' placeholder='Description' maxLength='250' rows='6' autoComplete='off'></textarea>
      <input id='mileageInput' name='mileage' type='number' pattern="[0-9]*" placeholder='Miles' autoComplete='off'></input>
      <input id='dateOccuredInput' name='dateOccured' type='date' placeholder='Date' placeholder='Date Occured' max={new Date().toISOString().slice(0,-14)}></input>
      <button type='button' className='green' onClick={postData}>Submit</button>
    </form>
    {error && <ErrorBar>{error}</ErrorBar>}
    </>

  )
}

