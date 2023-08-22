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
    <div className='flexRow' style={{'justifyContent': 'space-between', 'width': '100%' , 'margin': '0.3em'}}>
      <a href="google.com">Forgot Password?</a>
      <Submit/>
    </div>
  )
}

function Submit () {
  return (
    <button type='button' className='submit'>
      <p>Submit</p>
    </button>
  )
}
