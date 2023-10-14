import React from 'react';


/*
labels = [{title:string, key: string}]
data = [
  {label: data}
]
*/

export default function Table ({labels = [], data = []}){
  return (
    <table className='table center'>
      <thead>
        <Labels labels={labels}/>
      </thead>
      <tbody>
        <Data labels={labels} data={data}/>
      </tbody>


    </table>
  )
}

function Labels ({labels}){
  return (
    <tr className='tableLabels'>
      {labels.map((value, key)=>{
        return (
          <th key={key}>{value.title}</th>
        )
      })}
    </tr>
  )
}

function Data ({labels, data}){

   return (
    <>
    {data.map((row, key)=>{
      return (
        <tr className='tableEntry' key={key}>
          {labels.map((label, key)=>{
            if (row[label.key] instanceof Date) {
              return (
                <td key={key}>{`${row[label.key].getMonth() + 1}/${row[label.key].getDate()}/${row[label.key].getFullYear().toString().slice(-2)}`}</td>
              )
            }
            return (
              <td key={key}>{row[label.key]}</td>
            )
          })}
        </tr>
      )
    })}
    </>
   )
}