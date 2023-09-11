import React from 'react';

import ModalWindow from '../ModalWindow.jsx';
import TextInput from './TextInput.jsx';

export default function DatePicker (){
  return (
    <>
    <TextInput type={'text'} placeholder={'mm/dd/yyyy'} readonly={true}/>
    <Calendar/>
    </>
  );
}

function Calendar (){
  return (
    <ModalWindow>
      <Header/>
      <Body month={'march'} year={'2004'}/>
    </ModalWindow>
  )
};

function Header(){
  return (
    <div className='cardHeader flexRow'>
      <h2>April</h2>
      <h2>2004</h2>
    </div>
  )
}

function Body ({month, year}){
  //get the first day of the year
  var firstDay = new Date(`${month} 1, ${year}`).getDay();

  var dates = [];
  var dayNum = 1;

  for (var weekNum = 0; weekNum < 6; weekNum++) {
    var week = [];
    if (dayNum > 30) {
      break;
    }
    for (var day = 0; day < 7; day++) {
      if (dayNum > 30) {
        break;
      }
      if (weekNum === 0 && day < firstDay) {
        week.push(<th></th>);
      } else {
        week.push(<th>{dayNum}</th>);
        dayNum++;
        console.log(dayNum)

      }

    }

    dates.push(<tr>{week}</tr>);
    week = [];
  }


  return (
    <table className='calendar'>
      <tr className='calendarDays'>
        <th>S</th>
        <th>M</th>
        <th>T</th>
        <th>W</th>
        <th>T</th>
        <th>F</th>
        <th>S</th>
      </tr>
      {dates}
    </table>
  );
}