import React from 'react';


/*
labels = [strings]
data = [
  {label: data}
]
*/

export default function Table ({labels = [], data = []}){
  return (
    <table className='table center'>
      <Labels labels={labels}/>
      <Data labels={labels} data={data}/>

    </table>
  )
}

function Labels ({labels}){
  return (
    <tr className='tableLabels'>
      {labels.map((value)=>{
        return (
          <th>{value}</th>
        )
      })}
    </tr>
  )
}

function Data ({labels, data}){

   return (
    <>
    {data.map((row)=>{
      return (
        <tr className='tableEntry'>
          {labels.map((label)=>{
            return (
              <td>{row[label]}</td>
            )
          })}
        </tr>
      )
    })}
    </>
   )
}