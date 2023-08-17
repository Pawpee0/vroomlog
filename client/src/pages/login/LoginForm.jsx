import React from 'react';
import TextInput from '../../components/miniComponents/TextInput.jsx';

export default function LoginForm (){
  return (
    <div id='LoginForm' className='form'>
      <form class='flexColumn'>
        <TextInput placeholder={'Username'}/>
        <TextInput placeholder={'Password'} type={'password'}/>
      </form>
    </div>
  )
};


