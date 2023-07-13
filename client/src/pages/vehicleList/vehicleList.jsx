import React from 'react';
import {useEffect, useState} from 'react';

import {Container, Box, Paper, Stack, Typography, Button, Divider } from '@mui/material';

import axios from 'axios';

import AddVehicle from './addVehicle.jsx';

export default function VehicleList (){

  var [vehicles, setVehicles] = useState([]);
  var [open, setOpen] = useState(false);

  useEffect(()=>{
    async function fetchData(){
      var response = await axios.get('/vehicleList');
      console.log(response);
      setVehicles(response.data);
    }
    fetchData();
  },[]);

  return (
    <Container maxWidth="md">

      {/* list base */}
      <Paper sx={{'borderRadius': '25px', 'maxWidth': '100%'}} elevation={1}>

        <Header setOpen={setOpen}/>
        <List vehicles={vehicles}/>

        <AddVehicle open={open} onClose={()=>{setOpen(false)}}/>
      </Paper>
    </Container>
  );
};

function Header ({setOpen}) {
  return (
    <Stack direction='row' justifyContent='space-between' sx={{'borderRadius':'25px 25px 0px 0px','backgroundColor': '#212121', 'maxWidth': '100%', 'padding': '20px'}}>

      <Typography variant='h4' sx={{}}>Vehicles</Typography>

      <Button variant='contained' onClick={()=>{setOpen(true)}}>Add Vehicle</Button>

    </Stack>
  );
}
function List ({vehicles}) {
  return (
    <Stack direction='column' sx={{'margin': '15px'}}>
        {vehicles.map((vehicleData)=>{
          return (
            <VehicleUnit vehicleData={vehicleData}/>
          );
        })}
      </Stack>
  );
}

function VehicleUnit ({vehicleData}){



  var redirect = ()=>{
    window.location.href = `http://localhost:3000/vehicles/${vehicleData.id}`
  };

  return (
    <Button variant='contained' color='paperButton' sx={{'margin': '10px', 'padding': '10px'}} onClick={redirect}>

    <Stack direction='row' alignItems='center' justifyContent='space-between' sx={{'width': "100%"}}>

      <Stack direction='row' alignItems='center' spacing={1} divider={<Divider orientation='vertical' flexItem/>}>
        <Typography align='left' variant={'h6'}>{vehicleData.make}</Typography>
        <Typography align='left' variant={'subtitle1'}>{vehicleData.model}</Typography>
      </Stack>

      <Typography align='right' sx={{'opacity':'0.7'}}>{vehicleData.year}</Typography>
    </Stack>



    </Button>
  );
}
