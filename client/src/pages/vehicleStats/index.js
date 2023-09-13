import React from 'react';
import {useState, useEffect} from 'react';
import '../../styles/style.css';
import '../../styles/inputs.css';
import {createRoot} from 'react-dom/client';

import MainHeader from '../../components/MainHeader.jsx';
import Miles from './Miles.jsx';
import Reminders from './Reminders.jsx';

import axios from 'axios';

const root = createRoot(document.getElementById('app'));


function App (){

  var [basicVehicleData, setBasicVehicleData] = useState({});
  var id_Vehicles = window.location.href.charAt(window.location.href.length - 1);

  useEffect(()=>{
    async function fetchData (){
      try {
        var response = await axios.get(`/vehicles/${id_Vehicles}/data`);
        setBasicVehicleData(response.data);
      }
      catch(err) {
        console.log(err);
        window.location.reload();
      }
    }

    fetchData();
  },[]);

  return (
    <MainHeader>
      <h1 style={{textAlign: 'center'}}>{basicVehicleData.make} {basicVehicleData.model}</h1>
      <div className='flexRow center' style={{'maxWidth': '700px', 'width': '100%', 'justifyContent': 'space-around', 'flexWrap':'wrap'}}>
        <Miles id_Vehicles={id_Vehicles}/>
        <Reminders/>
      </div>
    </MainHeader>
  );
}
root.render(
  <App/>
)