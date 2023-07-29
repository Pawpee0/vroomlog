import React from 'react';
import {useEffect, useState} from 'react';

import {Container, Paper, Stack, Typography, Button} from '@mui/material';

import LineChart from '../../components/LineChart/LineChart.jsx';
import AddMiles from '../../components/addMiles.jsx';

import axios from 'axios';


export default function VehicleHistory (){

  var [vehicleData, setVehicleData] = useState({});
  var [open, setOpen] = useState(false);


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

        <Header vehicleData={vehicleData} setOpen={setOpen}/>
        <LineChart id={'graph'} width={500} height={350}/>
        <AddMiles carId={vehicleData.id} open={open} onClose={()=>{setOpen(false)}}/>


      </Paper>
    </Container>
  );
};

function Header ({vehicleData, setOpen}) {
  return (
    <Stack direction='row' spacing={2} alignItems = 'center' justifyContent='flex-start' sx={{'borderRadius':'25px 25px 0px 0px','backgroundColor': '#212121', 'maxWidth': '100%', 'padding': '20px'}}>

      <Typography variant='h3'>{vehicleData.make}</Typography>
      <Typography variant='h3'>{vehicleData.model}</Typography>
      <Button variant='contained' onClick={()=>{setOpen(true)}}>Add Miles</Button>



    </Stack>
  );
}