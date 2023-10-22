import React from 'react';
import {useState, useEffect} from 'react';
import AddMiles from '../../components/AddMiles.jsx';
import LineGraph from '../../components/LineGraph.jsx';

export default function Miles ({id_Vehicles, mileageData}){

  var [showAddMiles, setShowAddMiles] = useState(false);
  return (
    <div className='card flexColumn widget'>
      <Header setShowAddMiles={setShowAddMiles}/>
      <Body mileageData={mileageData}/>
      {showAddMiles && <AddMiles id_Vehicles={id_Vehicles} setCloseState={setShowAddMiles}/>}
    </div>
  )
}

function Header ({setShowAddMiles}){
  return (
    <div className='cardHeader' >
      <h2>Miles</h2>
      <AddMilesButton setShowAddMiles={setShowAddMiles}/>
    </div>
  );
}

function AddMilesButton ({setShowAddMiles}){
  return (
    <button type='button' className='primary' onClick={()=>{setShowAddMiles(true)}}>
      Add Miles
    </button>
  )
};

function Body ({mileageData = []}){

  var mileData = {
    miles: [],
    dates: []
  }

  for (var x = 0; x < mileageData.length; x++) {
    mileData.miles.push(mileageData[x].mileage);
    mileData.dates.push(Date.parse(mileageData[x].dateOccured));
  }


  return (
    <div className='cardBody flexColumn'>
      <LineGraph width={209} height={150} xAxis={mileData.dates} yAxis={mileData.miles}/>
    </div>
  )
};