import React from 'react';

import {signOut} from 'firebase/auth';
import auth from '../firebase.js';

import axios from 'axios';
export default function MainHeader ({children}){

  var submitSignOut = ()=>{
    console.log('running');
    signOut(auth).then(()=>{
      //success
      console.log('success');
      axios.post('/sessionLogout', {});
    }).catch((error)=>{
      console.log(error);
    })
  };
  return (
    <>
      <header id="mainHeader" className='flexRow'>
        <h1>VroomLog</h1>
        <button type='button' onClick={submitSignOut}>
          <p>Sign Out</p>
        </button>
      </header>

      {children}
    </>

  );
};