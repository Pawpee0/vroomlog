import React from 'react';
import {useRef} from 'react';
import TextInput from '../../components/miniComponents/TextInput.jsx';

import auth from '../../firebase.js';
import {createUserWithEmailAndPassword} from 'firebase/auth';

import axios from 'axios';

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
  var checkData = ()=>{
    if (signUpData.current.Username === undefined) return 'Please enter a username';
    if (signUpData.current.Email === undefined) return 'Please enter an email';
    if (signUpData.current.Password === undefined) return 'Please enter a password';
    if (signUpData.current.ConfirmPassword === undefined) return 'Please confirm your password';

    if (signUpData.current.Password !== signUpData.current.ConfirmPassword) return "Password doesn't match";
    if (signUpData.current.Password.length < 7) return 'Please enter a longer password';

    return false;
  }
  var signUp = ()=>{

    //checks if the user input is valid
    if (checkData() === false) {
      //create the account
      createUserWithEmailAndPassword(auth, signUpData.current.Email, signUpData.current.Password)
      .then((userCredential)=>{
        console.log('Signed Up!');
        console.log(userCredential);

        //get the IdToken
        userCredential.user.getIdToken(true)
        .then((idToken)=>{
          //send the userCredentials to server
          axios.post('/users/addUser', {
            id: idToken,
            username: signUpData.current.Username
          })
          .then(()=>{
            //grab a session cookie
            axios.post('/sessionLogin', {
              idToken: idToken
            })
            .then((response)=>{{
              console.log(response);
              window.location.replace(`${window.location.origin}/vehicles`);
            }});
          })
          .catch(()=>{
            console.log('signup error');
          });
        })

      })
      .catch((error)=>{
        console.log(error.code, error.message);
      })
    } else {
      //display the error
      console.log(checkData());
    }

  }

  return (
    <button type='button' className='submit' onClick={signUp}>
      <p>Submit</p>
    </button>
  )
}

