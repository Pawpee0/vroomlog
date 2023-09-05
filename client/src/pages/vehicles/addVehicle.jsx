import React from 'react';

import { useState, useRef} from 'react';

import TextInput from '../../components/miniComponents/TextInput.jsx';
import ModalWindow from '../../components/miniComponents/ModalWindow.jsx';
import axios from 'axios';

export default function AddVehicle({open, onClose}){



  var newVehicleData = useRef({});


  var submitForm = ()=>{

    axios.post('/user/vehicles/list',{...newVehicleData.current})
    .then((response)=>{
      location.reload();
    });
  };

  return (
    <ModalWindow onClose={onClose}>
      <Header/>
      <Body newVehicleData={newVehicleData}/>
      <Footer submitForm={submitForm}/>
    </ModalWindow>

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
      <TextInput type='number' placeholder='Year' onChange={(e)=>{newVehicleData.current.year = e.target.value}}/>
      <TextInput placeholder='Make' onChange={(e)=>{newVehicleData.current.make = e.target.value}}/>
      <TextInput placeholder='Model' onChange={(e)=>{newVehicleData.current.model = e.target.value}}/>
      <TextInput placeholder='Color' onChange={(e)=>{newVehicleData.current.color = e.target.value}}/>

    </form>
  )
};

function Footer({submitForm}){
  return (
    <div className='center flexRow'>
      <button type='button' className='button' onClick={submitForm}>
        <p>Submit</p>
      </button>
    </div>
  )
}