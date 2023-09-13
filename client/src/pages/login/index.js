import React from 'react';
import { useState, useRef } from 'react';
import '../../styles/inputs.css'
import '../../styles/style.css';
import {createRoot} from 'react-dom/client';

import MainHeader from '../../components/MainHeader.jsx';
import LoginForm from './LoginForm.jsx';
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
  var slideDirection = useRef('');

  var setForm = (bool)=>{
    if (!bool) {
      loginStyle.current = {'opacity': '0.2'};
      signUpStyle.current = {};
      slideDirection.current = 'sliderRight';

    } else {
      signUpStyle.current = {'opacity': '0.2'};
      loginStyle.current = {};
      slideDirection.current = 'sliderLeft';

    }

    setLoginScreen(bool);
  };

  return (
    <div className='center card flexColumn' style={{"width":"92vw", 'maxWidth': '330px'}}>
      <Header setForm={setForm} loginStyle={loginStyle.current} signUpStyle={signUpStyle.current}/>
      <Slider slideDirection={slideDirection.current}/>
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

function Slider({slideDirection}){
  var style =
  {
    width: '4em',
    'height': '2px',
    fill: 'white',
  };

  return (
    <svg style={{width: 'calc(100% - 3em)', height: '5px', position: 'relative', bottom: '5px'}}>
      <rect style={style} className={slideDirection}/>
    </svg>

  );
}