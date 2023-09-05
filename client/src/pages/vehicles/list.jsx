import React from 'react';
import {useEffect, useState} from 'react';

import axios from 'axios';

export default function List ({onShow}){

  var [vehicleList, setVehicleList] = useState([]);

  useEffect(()=>{
    console.log('running');
    axios.get('/user/vehicles/list')
    .then((response)=>{
      setVehicleList(response.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  },[]);

  return (
    <div className='center card flexColumn'style={{width: '92vw'}}>
      <Header onShow={onShow}/>
      <Body vehicleList={vehicleList}/>
    </div>
  );


};


function Header({onShow}){
  return (
    <div className='cardHeader flexRow'>
      <h2>My Vehicles</h2>
      <AddVehicleButton onShow={onShow}/>
    </div>
  )
}

function Body({vehicleList}){
  return (
    <div className='flexColumn'>
      {vehicleList.map((vehicle)=>{
        return (
          <Vehicle vehicleData={vehicle}/>
        )
      })}
    </div>
  )
}

function Vehicle({vehicleData}){
  return (
    <div className='flexRow cardItem'>
      <p>{vehicleData.make} {vehicleData.model}</p>
      <p>{vehicleData.year}</p>
    </div>
  )
}

function AddVehicleButton({onShow}){
  return (
    <div className='button' onClick={onShow}>
      <p>Add Vehicle</p>
    </div>
  )
}