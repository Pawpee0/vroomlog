import React from 'react';

export default function MainHeader ({children}){

  return (
    <>
      <header id="mainHeader">
        <h1>VroomLog</h1>
      </header>

      {children}
    </>

  );
};