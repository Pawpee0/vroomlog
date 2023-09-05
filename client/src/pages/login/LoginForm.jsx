import React from 'react';
import {useRef} from 'react';

import TextInput from '../../components/miniComponents/TextInput.jsx';

import auth from '../../firebase.js';
import {signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';

import axios from 'axios';

export default function LoginForm (){

  var loginData = useRef({});

  return (
    <div id='LoginForm' className='form'>
      <form className='flexColumn'>
        <TextInput placeholder={'Username'} onChange={(e)=>{loginData.current.Email = e.target.value}}/>
        <TextInput placeholder={'Password'} type={'password'} onChange={(e)=>{loginData.current.Password = e.target.value}}/>
        <Footer loginData={loginData}/>
      </form>
    </div>
  )
};

function Footer ({loginData}){
  return (
    <div className='flexRow' style={{'justifyContent': 'space-between', 'width': '100%' , 'margin': '0.3em'}}>
      <a href="google.com">Forgot Password?</a>
      <Submit loginData={loginData}/>
    </div>
  )
}

function Submit ({loginData}) {
  return (
    <button type='button' className='submit' onClick={()=>{Login(loginData.current.Email, loginData.current.Password);}}>
      <p>Submit</p>
    </button>
  )
}

function Login (email, password){

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential)=>{
    const user = userCredential.user;

    // onAuthStateChanged(auth, (user)=>{
    //   if (user) {
    //   }
    //   else {
    //     console.log('no user');
    //   }
    // });

    //get the IdToken
    userCredential.user.getIdToken(true)
    .then((idToken)=>{
      //grab a session cookie
      axios.post('/sessionLogin', {
        idToken: idToken
      })
      .then((response)=>{{
        console.log(response);
        window.location.replace('http://localhost:3000/vehicles');
      }});
    })
  })
  .catch((error)=>{
    console.log(error);
  });
}