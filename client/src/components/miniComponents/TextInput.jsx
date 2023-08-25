import React from 'react';


export default function TextInput ({placeholder = '', type='text', onChange}){
  return (
    <input type={type} placeholder={placeholder} onChange={onChange}/>
  )
};
