import React from 'react';
import {useState, useEffect} from 'react';
import AddMiles from '../../components/AddMiles.jsx';
import LineGraph from '../../components/LineGraph.jsx';

import axios from 'axios';

export default function Miles ({id_Vehicles}){

  var [showAddMiles, setShowAddMiles] = useState(false);
  return (
    <div className='card flexColumn'>
      <Header setShowAddMiles={setShowAddMiles}/>
      <Body/>
      {showAddMiles && <AddMiles id_Vehicles={id_Vehicles} setCloseState={setShowAddMiles}/>}
    </div>
  )
}

function Header ({setShowAddMiles}){
  return (
    <div className='cardHeader flexRow' >
      <h2>Miles</h2>
      <AddMilesButton setShowAddMiles={setShowAddMiles}/>
    </div>
  );
}

function AddMilesButton ({setShowAddMiles}){
  return (
    <button type='button' className='green' onClick={()=>{setShowAddMiles(true)}}>
      <p>Add Miles</p>
    </button>
  )
};

function Body (){

  var [mileData, setMileData] = useState({miles: [], dates: []});

  useEffect(()=>{
    async function fetchData (){
      try {
        var response = await axios.get(`${window.location.href}/data/miles`);
        var xTemp = [];
        var yTemp = [];

        for (var x = 0; x < response.data.length; x++) {
          xTemp.push(response.data[x].mileage);
          yTemp.push(Date.parse(response.data[x].dateOccured));
        }
        setMileData({miles: [...xTemp], dates: [...yTemp]});
      }
      catch(err) {
        console.log(err);
      }
    };
    fetchData();
  },[]);

  return (
    <div className='cardBody flexColumn'>
      <LineGraph width={209} height={150} xAxis={mileData.dates} yAxis={mileData.miles}/>
    </div>
  )
};