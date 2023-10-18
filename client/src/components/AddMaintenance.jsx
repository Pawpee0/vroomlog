import React from 'react';
import {useRef} from 'react';
import ModalWindow from './ModalWindow.jsx';

import axios from 'axios';

export default function AddMaintenance ({id_Vehicles, setCloseState}){

  var data = useRef({id_Vehicles: id_Vehicles});

  var updateData = (e)=>{
    data.current[e.target.name] = e.target.value;
  }

  var postData = async ()=>{
    data.current.dateAdded = new Date;
    var response = await axios.post(`/vehicles/${id_Vehicles}/data/maintenance`, data.current);

    console.log(response);
  };

  return (
    <ModalWindow setCloseState={setCloseState}>
      <Header/>
      <Body updateData={updateData}/>
      <Footer postData={postData}/>
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

function Body ({updateData}){
  return (
    <form className='flexColumn'>
      <input name='name' type='text' placeholder='Name' onChange={updateData}></input>
      <textarea name='description' placeholder='Description' maxLength='250' rows='6' onChange={updateData}></textarea>
      <input name='mileage' type='number' pattern="[0-9]*" placeholder='Miles' onChange={updateData}></input>
      <input name='dateOccured' type='date' placeholder='Date' placeholder='Date Occured' max={new Date().toISOString().slice(0,-14)}onChange={updateData}></input>
    </form>
  )
}

function Footer ({postData}){
  return (
    <div className='cardFooter'>
      <button className='green' onClick={postData}>Submit</button>
    </div>
  )
}


