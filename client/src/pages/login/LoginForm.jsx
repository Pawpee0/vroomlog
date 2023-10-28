import React from 'react';
import {useRef} from 'react';

import TextInput from '../../components/miniComponents/TextInput.jsx';

import auth from '../../firebase.js';
import {signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';

import axios from 'axios';

export default function LoginForm (){

  var loginData = useRef({});

  return (
    <form id='LoginForm' className='flexColumn cardBody'>
      <input name='email' placeholder={'Email'} type={'email'} onChange={(e)=>{loginData.current.Email = e.target.value}}></input>
      <input name='current-password' placeholder={'Password'} type={'password'} onChange={(e)=>{loginData.current.Password = e.target.value}}></input>
      <Footer loginData={loginData}/>
    </form>
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
    <button type='button' className='green' onClick={()=>{Login(loginData.current.Email, loginData.current.Password);}}>
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
        window.location.replace(`${window.location.origin}/vehicles`);
      }});
    })
  })
  .catch((error)=>{
    console.log(error);
  });
}