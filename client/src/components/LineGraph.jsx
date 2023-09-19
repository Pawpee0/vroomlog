import React from 'react';

import {useState, useEffect} from 'react';

export default function LineGraph({xAxis, yAxis, width, height}){

  var [lines, setLines] = useState([]);

  var xDelta = xAxis[xAxis.length - 1] - xAxis[0];
  var yDelta = yAxis[yAxis.length - 1] - yAxis[0];

  var tempLines = [];
  var tempCircles = [];
  var x1 = 0, x2 = 0, y2 = 0;
  var y1 = height;

  useEffect(()=>{


  for (var x = 0; x < xAxis.length; x++) {
    x2 = ((xAxis[x] - xAxis[0])/xDelta)*width;
    y2 = height - ((yAxis[x] -yAxis[0])/yDelta)*height;


    tempLines.push(<line x1={x1} y1={y1} x2={x2} y2={y2} className='linegraphLine'/>);
    x1 = x2;
    y1 = y2;
  }

  console.log((yAxis[yAxis.length - 1] - yAxis[0]) * 1000 * 60 * 60 * 24/ (xAxis[xAxis.length - 1] - xAxis[0] ));
  setLines(tempLines);

  },[xAxis]);
  return (
    <svg width={width} height={height} className='linegraph'>
      {lines}
    </svg>
  );

};

/*
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
      ctx.lineWidth = 3;
      ctx.stroke();
    }
  },[xAxis, yAxis]);


  <canvas id='mileageGraph' className='linegraph' width={width} height={height}>

    </canvas>
*/