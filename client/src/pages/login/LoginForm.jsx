import React from 'react';
import TextInput from '../../components/miniComponents/TextInput.jsx';

export default function LoginForm (){
  return (
    <div id='LoginForm' className='form'>
      <form className='flexColumn'>
        <TextInput placeholder={'Username'}/>
        <TextInput placeholder={'Password'} type={'password'}/>
        <Footer/>
      </form>
    </div>
  )
};

function Footer (){
  return (
    <div className='flexRow' style={{'justifyContent': 'space-between', 'width': '100%'}}>
      <p>Forgot Password?</p>
      <Submit/>
    </div>
  )
}

function Submit () {
  return (
    <div className='button'>
      <p>Submit</p>
    </div>
  )
}
