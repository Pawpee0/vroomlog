import React from 'react';

export default function LoginForm (){
  return (
    <div style={{width: '100%'}}>
      <form>
        <TextInput placeholder={'Username'}/>
      </form>
    </div>
  )
};

function TextInput ({placeholder = '', password = 'false'}){
  return (
    <input type='text' placeholder={placeholder} password={password} onChange={()=>{}}/>
  )
};

