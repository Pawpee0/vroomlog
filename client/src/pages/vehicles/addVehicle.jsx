import React from 'react';

import { useState, useRef} from 'react';

import TextInput from '../../components/miniComponents/TextInput.jsx';
import ModalWindow from '../../components/ModalWindow.jsx';
import ErrorBar from '../../components/ErrorBar.jsx';
import axios from 'axios';

export default function AddVehicle({ setCloseState}){

  var newVehicleData = useRef({});
  var error = useRef('');
  var [showError, setShowError] = useState(false);



  var submitForm = ()=>{

    //check the input data
    //setShowError(false);
    error.current = '';
    if (newVehicleData.current.model == null){error.current = ('Please enter a model');}
    else if (newVehicleData.current.make == null){error.current = ('Please enter a make');}
    else if (newVehicleData.current.year == null){error.current = ('Please enter a valid year');}
    else {setShowError(false)};

    if (error.current === '') {
      axios.post('/user/vehicles/list', {...newVehicleData.current})
      .then((response)=>{
        location.reload();
      });
    } else {
      setShowError(error.current);
    }
  };

  return (
    <>
    <ModalWindow setCloseState={setCloseState}>
      <Header/>
      <Body newVehicleData={newVehicleData}/>
      <Footer submitForm={submitForm}/>

      {showError && <ErrorBar><p>{error.current}</p></ErrorBar>}

    </ModalWindow>
    </>


  )
};


function Header (){
  return (
    <div className='cardHeader flexRow'>
      <h2>Add Vehicle</h2>
    </div>
  )
};

function Body ({newVehicleData}){
  return (
    <form className='center flexColumn form'>
      <input type='number' pattern="[0-9]*" placeholder='Year' onChange={(e)=>{newVehicleData.current.year = e.target.value}}></input>
      <input type='text' placeholder='Make' onChange={(e)=>{newVehicleData.current.make = e.target.value}}></input>
      <input type='text' placeholder='Model' onChange={(e)=>{newVehicleData.current.model = e.target.value}}></input>
      <input type='text' placeholder='Color' onChange={(e)=>{newVehicleData.current.color = e.target.value}}></input>

    </form>
  )
};

function Footer({submitForm}){
  return (
    <div className='center flexRow' style={{margin: '0.5rem 0rem 1.1rem 0rem'}}>
      <button type='button' className='green' onClick={submitForm}>
        <p>Submit</p>
      </button>
    </div>
  )
}