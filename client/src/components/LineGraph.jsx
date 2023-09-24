import React from 'react';

import {useState, useEffect} from 'react';

export default function LineGraph({xAxis, yAxis, width, height}){

  var graphWidth = width - 20;
  var graphHeight = height - 20;


  return (
    <svg width={width} height={height}>
      <Graph xAxis={xAxis} yAxis={yAxis} width={graphWidth} height={graphHeight} x={width - graphWidth} y={0}/>
      <Text xAxis={xAxis} yAxis={yAxis} width={graphWidth} height={graphHeight}/>
    </svg>
  );
};

function Text ({xAxis, yAxis, width, height}){
  var referenceLines = [];
  var values = [];
  var getPosY = makeGetPos(firstMilestone(yAxis[0]), nextMilestone(yAxis[yAxis.length - 1]), height);

  var step = (nextMilestone(yAxis[yAxis.length - 1]) - firstMilestone(yAxis[0])) / 4;

  for (var x = nextMilestone(yAxis[yAxis.length - 1]); x > firstMilestone(yAxis[0]); x-= step){
    console.log(x, getPosY(x));
    values.push(<text className='graphValue' x={0} y={height - getPosY(x) + 10}>{`${x/1000}K`}</text>);
    referenceLines.push(<line className='referenceLine' x1={20} x2={width + 20} y1={height - getPosY(x) + 6} y2={height - getPosY(x) + 6}/>)
  }

  return (
    <>
    {values}
    {referenceLines}
    </>

  );
}

function Graph ({xAxis, yAxis, width, height, x, y}){

  var [lines, setLines] = useState([]);

  useEffect(()=>{
    var tempLines = [];

    var getPosX = makeGetPos(xAxis[0], xAxis[xAxis.length - 1], width);
    var getPosY = makeGetPos(firstMilestone(yAxis[0]), nextMilestone(yAxis[yAxis.length - 1]), height);

    var x1 = 0, x2 = 0, y2 = 0;
    var y1 = height - getPosY(yAxis[0])

    for (var x = 0; x < xAxis.length; x++) {
      x2 = getPosX(xAxis[x]);
      y2 = height - getPosY(yAxis[x]);

      tempLines.push(<line x1={x1} y1={y1} x2={x2} y2={y2} className='linegraphLine'/>);
      x1 = x2;
      y1 = y2;

    }


    setLines(tempLines);

  },[xAxis]);

  return (
    <svg width={width} height={height} x={x} y={y}>
    <rect width={width} height={height} rx='0.5em' ry='0.5em' className='linegraph'/>
    {lines}
    </svg>

  );
};

function makeGetPos (min, max, px){

  return (x)=>{
      var difference = max - min;

      return (px * (x - min)) / difference
  }
}

function nextMilestone (num = 1) {
  return Math.ceil(num/Math.pow(10, num.toString().length - 1))*Math.pow(10, num.toString().length - 1)
}
function firstMilestone (num = 1) {
  return Math.floor(num/Math.pow(10, num.toString().length - 1))*Math.pow(10, num.toString().length - 1)
}