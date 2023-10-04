import React from 'react';
import {useState, useEffect} from 'react';

import AddMaintenance from '../../components/AddMaintenance.jsx';
import Table from '../../components/Table.jsx';

import axios from 'axios';

export default function Maintenance ({id_Vehicles}){

  return (
    <div className='card'>
      <Header id_Vehicles={id_Vehicles}/>
      <Body id_Vehicles={id_Vehicles}/>
    </div>
  );
};


function Header ({id_Vehicles}){
  var [showModule, setShowModule] = useState(true);
  return (
    <>
      <div className='cardHeader flexRow'>
        <h2>Maintenance</h2>
        <button className="green" onClick={()=>{setShowModule(true)}}>+</button>
      </div>
      {showModule && <AddMaintenance id_Vehicles={id_Vehicles} setCloseState={setShowModule}/>}
    </>

  )
}

function Body ({id_Vehicles}){

  var [maintenanceData, setMaintenanceData] = useState([]);
  var labels = [
    {title: 'Name', key:'name'},
    {title: 'Miles', key:'mileage'},
    {title: 'Date', key:'dateOccured'}
  ];

  useEffect(()=>{
    axios.get(`/vehicles/${id_Vehicles}/data/maintenance`)
    .then((data)=>{
      for (var x = 0; x < data.data.length; x++) {
        data.data[x].dateOccured = new Date (data.data[x].dateOccured)
      }
      setMaintenanceData(data.data);

    })
    .catch((err)=>{
      console.log(err)
    });
  },[]);
  return (
    <Table labels={labels} data={maintenanceData}/>
  )
}