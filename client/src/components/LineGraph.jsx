import React from 'react';

import {useEffect} from 'react';

export default function LineGraph({xAxis, yAxis, width, height}){
  useEffect(()=>{
    const canvas = document.getElementById('mileageGraph');
    const ctx = canvas.getContext('2d');

    var xMax = xAxis[xAxis.length - 1];
    var yMax = yAxis[yAxis.length - 1];


    //move to the bottom corner of the graph
    ctx.moveTo(0, height);

    //loop through the data
    for (var x = 0; x < xAxis.length; x++) {
      console.log((xAxis[x]/xMax)/width);
      ctx.lineTo((xAxis[x]/xMax)*width, height - (yAxis[x]/yMax)*height);
      ctx.stroke();
    }
  },[]);
  return (
    <canvas id='mileageGraph' className='linegraph' width={width} height={height}>

    </canvas>
  );
};