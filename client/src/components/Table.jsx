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
          <th>{value.title}</th>
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
            if (row[label.key] instanceof Date) {
              return (
                <td>{`${row[label.key].getMonth() + 1}/${row[label.key].getDate()}/${row[label.key].getFullYear().toString().slice(-2)}`}</td>
              )
            }
            return (
              <td>{row[label.key]}</td>
            )
          })}
        </tr>
      )
    })}
    </>
   )
}