import React from 'react';
import { useState } from 'react';
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
  var [logInScreen, setLogInScreen] = useState(true);


  return (
    <div className='center card flexColumn' style={{"width":"92vw", 'maxWidth': '330px'}}>
      <Header/>
      {logInScreen ? (
        <LoginForm/>
      ) : (
        <SignUpForm/>
      )}
    </div>
  );
}

function Header(){
  return (
    <div className='cardHeader flexRow'>
        <h2>Login</h2>
        <h2>Sign Up</h2>
      </div>
  );
}

