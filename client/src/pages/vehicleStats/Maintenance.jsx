import React from 'react';
import {useState, useEffect} from 'react';

import AddMaintenance from '../../components/AddMaintenance.jsx';
import Table from '../../components/Table.jsx';

export default function Maintenance ({id_Vehicles, maintenanceData}){

  return (
    <div className='card widget'>
      <Header id_Vehicles={id_Vehicles}/>
      <Body id_Vehicles={id_Vehicles} maintenanceData={maintenanceData}/>
    </div>
  );
};


function Header ({id_Vehicles}){
  var [showModule, setShowModule] = useState(false);
  return (
    <>
      <div className='cardHeader'>
        <h2>Maintenance</h2>
        <button className="primary" onClick={()=>{setShowModule(true)}}>+</button>
      </div>
      {showModule && <AddMaintenance id_Vehicles={id_Vehicles} setCloseState={setShowModule}/>}
    </>

  )
}

function Body ({id_Vehicles, maintenanceData = []}){

  for (var x = 0; x < maintenanceData.length; x++) {
    maintenanceData[x].dateOccured = new Date(maintenanceData[x].dateOccured);
    maintenanceData[x].dateAdded = new Date(maintenanceData[x].dateAdded);
  }

  var labels = [
    {title: 'Name', key:'name'},
    {title: 'Miles', key:'mileage'},
    {title: 'Date', key:'dateOccured'}
  ];

  return (
    <Table labels={labels} data={maintenanceData}/>
  )
}