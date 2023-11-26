import React from 'react';
import {useState, useEffect} from 'react';

import axios from 'axios';

import MainHeader from '../../components/MainHeader.jsx';
import LineGraph from '../../components/LineGraph.jsx';
import Table from '../../components/Table.jsx';
import AddMiles from '../../components/AddMiles.jsx'

export default function App (){

  var [vehicleData, setVehicleData] = useState({});
  var id_Vehicles = window.location.pathname.split('/')[2];

  useEffect(()=>{

    axios.get(`/vehicles/${id_Vehicles}/data/miles`)
    .then((response)=>{
      setVehicleData(response.data);
    })
    .catch((err)=>{

    })
  },[])

  return (
    <div>
      <MainHeader>
        <h1 style={{textAlign: "center"}}>{vehicleData.make} {vehicleData.model}</h1>
        <div className='flexRow center statsContainer'>
          <MilesGraph mileageEntries={vehicleData.mileageEntries}/>
          <div className='flexColumn widget'>
            <MilesTable mileageEntries={vehicleData.mileageEntries}/>
            <AddMiles id_Vehicles={id_Vehicles}/>
          </div>
        </div>
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

  return (
    <div className='card statsGraph'>
      <div className='cardHeader'>
        <h2>Graph</h2>
      </div>

      <div className='cardBody flexColumn'>
        <LineGraph xAxis={dateData} yAxis={milesData} width={'400px'} height={'300px'}/>
      </div>
    </div>
  )
}

function MilesTable ({mileageEntries=[]}){

  var data = mileageEntries.toReversed();

  var labels = [
    {title: 'Mileage', key:'mileage'},
    {title: 'Date', key: 'dateOccured'}
  ];

  for (var x = 0; x<data.length; x++){
    data[x].dateOccured = new Date(data[x].dateOccured);
  }

  return (
    <div className='card widget'>
      <div className='cardHeader'>
        <h2>Table</h2>
      </div>

      <div className='cardBody'>
        <Table labels={labels} data={data}/>
      </div>
    </div>
  )
}