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
      axios.get('/sessionLogout')
      .then(()=>{
        window.location.pathname = '/login';
      });
    }).catch((error)=>{
      console.log(error);
    })
  };

  var redirectToHome = ()=>{
    window.location.pathname ='/vehicles';
  }

  return (
    <>
      <header id="mainHeader" className='flexRow'>
        <button type='button' onClick={redirectToHome}>Home</button>
        <h1>VroomLog</h1>
        <button type='button' onClick={submitSignOut}>Sign Out</button>
      </header>

      {children}
    </>

  );
};