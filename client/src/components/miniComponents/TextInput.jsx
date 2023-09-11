import React from 'react';


export default function TextInput ({placeholder = '', type='text', onChange, readonly}){
  if (readonly) {
    return (
      <input type={type} placeholder={placeholder} onChange={onChange} readOnly/>
    )
  } else {
    return (
      <input type={type} placeholder={placeholder} onChange={onChange}/>
    )
  }
};
