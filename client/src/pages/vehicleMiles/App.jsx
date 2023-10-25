import React from 'react';
import {useState, useEffect} from 'react';

import axios from 'axios';

import MainHeader from '../../components/MainHeader.jsx';
import LineGraph from '../../components/LineGraph.jsx';

export default function App (){

  var [vehicleData, setVehicleData] = useState({});

  useEffect(()=>{
    var id_Vehicles = window.location.pathname.split('/')[2];

    axios.get(`/vehicles/${id_Vehicles}/data/miles`)
    .then((response)=>{
      setVehicleData(response.data);
      console.log(response);
    })
    .catch((err)=>{

    })
  },[])

  return (
    <div>
      <MainHeader>
        <h1 style={{textAlign: "center"}}>{vehicleData.make} {vehicleData.model}</h1>
        <MilesGraph mileageEntries={vehicleData.mileageEntries}/>
      </MainHeader>
    </div>
  )
};

function MilesGraph ({mileageEntries = []}){

  var milesData = [];
  var dateData = [];

  for (var x = 0; x < mileageEntries.length; x++) {
    milesData.push(mileageEntries[x].mileage);
    dateData.push(Date.parse(mileageEntries[x].dateOccured));
  }

  console.log(milesData);
  return (
    <div className='card center'>
      <div className='cardHeader'>
        <h2>Miles</h2>
      </div>

      <div className='cardBody flexColumn'>
        <LineGraph xAxis={dateData} yAxis={milesData} width={'400px'} height={'300px'}/>
      </div>
    </div>
  )
}
