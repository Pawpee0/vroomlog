import React from 'react';
import { useState} from 'react';
import { createRoot } from 'react-dom/client';

import '../../styles/style.css';
import '../../styles/inputs.css';

import auth from '../../firebase.js';
import {onAuthStateChanged} from 'firebase/auth';

import MainHeader from '../../components/MainHeader.jsx';
import List from './list.jsx'
import AddVehicle from './addVehicle.jsx';

// Render your React component instead
const root = createRoot(document.getElementById('app'));

function App (){

  var [showAddVehicleModal, setShowAddVehicleModal] = useState(false);

  onAuthStateChanged(auth, (user)=>{
    if (user) {
      console.log('user is signed in');
    } else {
      console.log('no user found');
    }
  })
  return (
    <MainHeader>
     <List onShow={(e)=>{setShowAddVehicleModal(true)}}/>
     {showAddVehicleModal && <AddVehicle setCloseState={setShowAddVehicleModal}/>}
    </MainHeader>

  )
}

root.render(
  <App/>
);