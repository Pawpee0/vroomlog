import React from 'react';

export default function MainHeader ({children}){

  return (
    <>
      <div id="mainHeader">
        <h1>VroomLog</h1>
      </div>

      {children}
    </>

  );
};