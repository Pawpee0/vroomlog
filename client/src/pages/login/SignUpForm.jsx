import React from 'react';
import {useRef} from 'react';
import TextInput from '../../components/miniComponents/TextInput.jsx';

import auth from '../../firebase.js';
import {createUserWithEmailAndPassword} from 'firebase/auth';

export default function SignUpForm (){

  var signUpData = useRef({});

  return (
    <div id='SignUpForm' className='form'>
      <form className='flexColumn'>
        <TextInput placeholder={'Username'} onChange={(e)=>{signUpData.current.Username = e.target.value}}/>
        <TextInput placeholder={'Email'} type={'email'} onChange={(e)=>{signUpData.current.Email = e.target.value}}/>
        <TextInput placeholder={'Password'} type={'password'} onChange={(e)=>{signUpData.current.Password = e.target.value}}/>
        <TextInput placeholder={'Confirm Password'} type={'password'} onChange={(e)=>{signUpData.current.ConfirmPassword = e.target.value}}/>

        <Footer signUpData={signUpData}/>
      </form>
    </div>
  )
};

function Footer ({signUpData}){
  return (
    <div className='flexRow' style={{'justifyContent': 'flex-end', 'width': '100%', 'margin': '0.3em'}}>
      <Submit signUpData={signUpData}/>
    </div>
  )
}

function Submit ({signUpData}) {
  var signUp = ()=>{
    createUserWithEmailAndPassword(auth, signUpData.current.Email, signUpData.current.Password)
    .then((userCredential)=>{
      console.log('Signed Up!');
      console.log(userCredential);
    })
    .catch((error)=>{
      console.log(error.code, error.message);
    })
  }

  return (
    <button type='button' className='submit' onClick={()=>{signUp();}}>
      <p>Submit</p>
    </button>
  )
}

