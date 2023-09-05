import React from 'react';

export default function List ({onShow}){
  return (
    <div className='center card flexColumn'style={{width: '92vw'}}>
      <Header onShow={onShow}/>
      <Body/>
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

function AddVehicleButton({onShow}){
  return (
    <div className='button' onClick={onShow}>
      <p>Add Vehicle</p>
    </div>
  )
}