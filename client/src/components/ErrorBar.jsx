import React from 'react';

export default function ErrorBar({children}){
  return (
    <div className='errorBar flexRow'>
      {/* <svg height='1vh' width='1vh' style={{marginRight:'0.3em'}}>
        <line x1='0' y1='0' x2='1vh' y2='1vh' style={{stroke: "rgb(240, 239, 239)", strokeWidth:'2'}}/>
        <line x1='1vh' y1='0' x2='0' y2='1vh'  style={{stroke: "rgb(240, 239, 239)", strokeWidth:'2'}}/>
      </svg> */}
      {children}
    </div>
  );
};