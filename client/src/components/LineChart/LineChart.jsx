import React from 'react';

import {useEffect} from 'react';

/*
data = [
  {
    x: 0,
    y: 0
  },
]



{
  x: 13413
  y: 73000
},
{
  x: 13568
  y: 74000
}
*/




export default function LineChart ({id, data, width, height}){

  var data =
  [
    {x:1631775600000,y:72222},
    {x:1632726000000,y:72494},
    {x:1633071600000,y:73314},
    {x:1670140800000,y:80420},
    {x:1674720000000,y:81111},
    {x:1684911600000,y:83000},
    {x:1689404400000,y:85000}
  ];

  //sort the data by the x axis
  var isSwapped;

  for (var i = 0; i < data.length - 1; i++) {
    isSwapped = false;

    for (var j = 0; j < data.length - 1 - i; j++) {
      if (data[j].x > data[j + 1].x) {
        // Swap elements
        var temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;
        isSwapped = true;
      }
    }

    // If no swaps were made in the inner loop, the array is already sorted
    if (!isSwapped) {
      break;
    }
  }

  var deltaX = data[data.length - 1].x - data[0].x;
  var deltaY = data[data.length - 1].y - data[0].y;
  console.log(deltaX);
  console.log(deltaY);
  useEffect(()=>{
    console.log(data);
    const canvas = document.getElementById(id);
    const ctx = canvas.getContext('2d');

    //move pen to base
    ctx.moveTo(0,height);


    //loop through our data
    for (var x = 0; x < data.length; x++) {
      ctx.lineTo(((data[x].x-data[0].x)/deltaX) * width, height - ((data[x].y-data[0].y)/deltaY) * height);
      ctx.stroke();
    }

  },[]);

  return (
    <canvas id={id} width={width} height={height}></canvas>
  );
}