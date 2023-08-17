import React from 'react';
import { useState, useRef } from 'react';
import '../../style.css';
import {createRoot} from 'react-dom/client';

import MainHeader from '../../components/MainHeader.jsx';
import LoginForm from './LogInForm.jsx';
import SignUpForm from './SignUpForm.jsx';

const root = createRoot(document.getElementById('app'));

root.render(
  <MainHeader>
    <Form/>
  </MainHeader>
);

function Form () {
  var [loginScreen, setLoginScreen] = useState(true);
  var loginStyle = useRef({});
  var signUpStyle = useRef({'opacity': '0.2'});

  var setForm = (bool)=>{
    if (!bool) {
      loginStyle.current = {'opacity': '0.2'};
      signUpStyle.current = {};

    } else {
      signUpStyle.current = {'opacity': '0.2'};
      loginStyle.current = {};
    }

    setLoginScreen(bool);
  };

  return (
    <div className='center card flexColumn' style={{"width":"92vw", 'maxWidth': '330px'}}>
      <Header setForm={setForm} loginStyle={loginStyle.current} signUpStyle={signUpStyle.current}/>
      {loginScreen ? (
        <LoginForm/>
      ) : (
        <SignUpForm/>
      )}
    </div>
  );
}

function Header({setForm, loginStyle = {}, signUpStyle = {}}){
  return (
    <div className='cardHeader flexRow'>
        <h2 onClick={()=>{setForm(true)}} style={loginStyle}>Login</h2>
        <h2 onClick={()=>{setForm(false)}} style={signUpStyle}>Sign Up</h2>
      </div>
  );
}

