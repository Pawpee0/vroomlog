import React from 'react';

import {useState, useEffect} from 'react';

export default function LineGraph({xAxis = [], yAxis = [], width, height}){




  return (
    <svg className='linegraph' viewBox='0 0 100 50'>
      <Text xAxis={xAxis} yAxis={yAxis} />
      <Graph xAxis={xAxis} yAxis={yAxis} width={'90%'} height={'90%'}/>
    </svg>
  );
};

function Text ({xAxis, yAxis}){

  //percentage is too high and isn't the same as the actual graph percentage, figure out a way to cut off the bottom chunk so that the percentage values are the same

  var referenceLines = [];
  var values = [];

  var step = (nextMilestone(yAxis[yAxis.length - 1]) - firstMilestone(yAxis[0])) / 4;

  for (var x = nextMilestone(yAxis[yAxis.length - 1]); x >= firstMilestone(yAxis[0]); x-= step){
    var y = (110 - ((x - firstMilestone(yAxis[0]))/(nextMilestone(yAxis[yAxis.length - 1]) - firstMilestone(yAxis[0])) * 100)) * .90;
    console.log(x, y);
    values.push(<text className='graphValue' x={0} y={`${y}%`} key={x}>{`${x/1000}K`}</text>);
    referenceLines.push(<line className='referenceLine' x1={10} x2={"100%"} y1={`${y - 2}%`} y2={`${y - 2}%`} key={x}/>)
  }

  return (
    <>
    {values}
    {referenceLines}
    </>

  );
}

function Graph ({xAxis, yAxis, width, height}){

  var [lines, setLines] = useState([]);

  useEffect(()=>{
    var tempLines = [];

    var x1 = 0, x2 = 0, y2 = 0;
    var y1 = 110 - ((yAxis[0] - firstMilestone(yAxis[0]))/(nextMilestone(yAxis[yAxis.length - 1]) - firstMilestone(yAxis[0])) * 100);

    for (var x = 0; x < xAxis.length; x++) {
      x2 = ((xAxis[x] - xAxis[0])/(xAxis[xAxis.length - 1] - xAxis[0]) * 100);
      y2 = 110 - ((yAxis[x] - firstMilestone(yAxis[0]))/(nextMilestone(yAxis[yAxis.length - 1]) - firstMilestone(yAxis[0])) * 100);

      tempLines.push(<line x1={`${x1}%`} y1={`${y1}%`} x2={`${x2}%`} y2={`${y2}%`} className='linegraphLine' key={x}/>);
      x1 = x2;
      y1 = y2;

    }


    setLines(tempLines);

  },[xAxis]);

  return (
    <svg width={width} height={height} x={'10%'} y={0}>
    {lines}
    </svg>

  );
};


function nextMilestone (num = 0) {
  return Math.ceil(num/Math.pow(10, num.toString().length - 1))*Math.pow(10, num.toString().length - 1)
}
function firstMilestone (num = 10) {
  return Math.floor(num/Math.pow(10, num.toString().length - 1))*Math.pow(10, num.toString().length - 1)
}