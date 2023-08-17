import React from 'react';


export default function TextInput ({placeholder = '', type='text'}){
  return (
    <input type={type} placeholder={placeholder} onChange={()=>{}}/>
  )
};
