import React from 'react';

import {useState, useRef, useEffect} from 'react';

import ModalWindow from '../ModalWindow.jsx';
import TextInput from './TextInput.jsx';

export default function DatePicker ({onChange}){
  var [date, setDate] = useState(new Date());


  return (
    <>
    <TextInput type={'text'} placeholder={'mm/dd/yyyy'} readonly={true}/>
    <Calendar month={date.getMonth() + 1} year={date.getFullYear()}/>
    </>
  );
}

function Calendar ({month, year}){

  return (
    <ModalWindow>
      <Header month={month} year={year}/>
      <Body month={month} year={year}/>
    </ModalWindow>
  )
};

function Header({month, year}){
  var monthsArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return (
    <div className='cardHeader flexRow'>
      <select id='monthSelector'>
        {monthsArr.map((name, key)=>{
          if (key === month - 1) {
            return (
              <option value={name} selected>{name}</option>
            )
          } else {
            return (
              <option value={name}>{name}</option>
            )
          }
        })}
      </select>
      <h2>{year}</h2>
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
        week.push(<td></td>);
      } else {
        week.push(<td className='calendarDate'>{dayNum}</td>);
        dayNum++;

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