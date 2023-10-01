import React from 'react';
import {useState} from 'react';

import AddMaintenance from '../../components/AddMaintenance.jsx';

export default function Maintenance ({id_Vehicles}){

  return (
    <div className='card'>
      <Header id_Vehicles={id_Vehicles}/>
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

function Body (){
}