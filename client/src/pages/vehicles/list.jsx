import React from 'react';

export default function List (){
  return (
    <div className='center card flexColumn'style={{width: '92vw'}}>
      <Header/>
      <Body/>
    </div>
  );
};


function Header(){
  return (
    <div className='cardHeader flexRow'>
      <h2>My Vehicles</h2>
      <AddVehicleButton/>
    </div>
  )
}

function Body(){
  return (
    <div className='flexColumn'>
      <Vehicle vehicleData={{make: 'Nissan', model: 'Altima', year: 2012}}/>
      <Vehicle vehicleData={{make: 'Yamaha', model: 'R3', year: 2015}}/>
      <Vehicle vehicleData={{make: 'Ford', model: 'F-350', year: 2014}}/>
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

function AddVehicleButton(){
  return (
    <div className='button'>
      <p>Add Vehicle</p>
    </div>
  )
}