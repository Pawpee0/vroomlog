import React from 'react';

import {useEffect, useState} from 'react';
import {Container, Paper, Stack, Typography} from '@mui/material';

import {LineChart, Line, Tooltip} from 'recharts';

import axios from 'axios';

export default function ServiceHistory (){

  var [vehicleData, setVehicleData] = useState({});

  useEffect(()=>{
    async function fetchVehicleData(){
      var response = await axios.get(`${window.location.href}/data`);
      console.log(response);
      setVehicleData(response.data);
    }
    fetchVehicleData();
  },[]);

  return (
    <Container maxWidth="md">

      {/* list base */}
      <Paper sx={{'borderRadius': '25px', 'maxWidth': '100%'}} elevation={1}>

        <Header vehicleData={vehicleData}/>
        <MileGraph/>
      </Paper>
    </Container>
  );
};

function Header ({vehicleData}) {
  return (
    <Stack direction='row' spacing={2} alignItems = 'center' justifyContent='flex-start' sx={{'borderRadius':'25px 25px 0px 0px','backgroundColor': '#212121', 'maxWidth': '100%', 'padding': '20px'}}>

      <Typography variant='h3'>{vehicleData.make}</Typography>
      <Typography variant='h3'>{vehicleData.model}</Typography>



    </Stack>
  );
}

function MileGraph (){

  var data = [{name: 'a', m:1},{name: 'a', m:3},{name: 'a', m:2},{name: 'a', m:3}]
  return (
    <LineChart width={400} height={400} data={data}>
      <Tooltip/>
      <Line type="monotone" dataKey="m" stroke="#8884d8" />
    </LineChart>
  )
}