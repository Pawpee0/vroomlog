import React from 'react';
import TextInput from '../../components/miniComponents/TextInput.jsx';

export default function SignUpForm (){
  return (
    <div id='SignUpForm' className='form'>
      <form className='flexColumn'>
        <TextInput placeholder={'Username'}/>
        <TextInput placeholder={'Email'}/>
        <TextInput placeholder={'Password'} type={'password'}/>
        <Footer/>
      </form>
    </div>
  )
};

function Footer (){
  return (
    <div className='flexRow' style={{'justifyContent': 'flex-end', 'width': '100%', 'margin': '0.3em'}}>
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
