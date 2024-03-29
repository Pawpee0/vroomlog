import React from 'react';
import {useState, useEffect} from 'react';


import {createRoot} from 'react-dom/client';

import MainHeader from '../../components/MainHeader.jsx';

import Maintenance from './Maintenance.jsx';
import Miles from './Miles.jsx';
import Reminders from './Reminders.jsx';

import axios from 'axios';

const root = createRoot(document.getElementById('app'));


export default function App (){

  var [vehicleData, setVehicleData] = useState({});
  var id_Vehicles = window.location.pathname.split('/')[2];

  useEffect(()=>{
    async function fetchData (){
      try {
        var response = await axios.get(`/vehicles/${id_Vehicles}/data`);
        setVehicleData(response.data);
      }
      catch(err) {
        console.log(err);
      }
    }

    fetchData();
  },[]);

  return (
    <MainHeader>
      <h1 style={{textAlign: 'center'}}>{vehicleData.make} {vehicleData.model}</h1>
      <div className='flexRow center widgetContainer' >
        <Miles id_Vehicles={id_Vehicles} mileageData={vehicleData.mileageEntries}/>
        <Reminders id_Vehicles={id_Vehicles}/>
        <Maintenance id_Vehicles={id_Vehicles} maintenanceData={vehicleData.maintenanceEntries}/>
      </div>
    </MainHeader>
  );
}
