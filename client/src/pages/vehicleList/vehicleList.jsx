import React from 'react';
import {useEffect, useState} from 'react';

import {Container, Box, Paper, Stack, Typography, Button} from '@mui/material';

import axios from 'axios';

export default function VehicleHistory (){

  var [vehicles, setVehicles] = useState([]);
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
      <Paper sx={{'border-radius': '25px', 'max-width': '100%', height:'50vh', padding:'15px'}} elevation='1'>

      <Stack direction='column'>
        {vehicles.map((vehicleData)=>{
          return (
            <VehicleUnit vehicleData={vehicleData}/>
          );
        })}
      </Stack>



    </Paper>
    </Container>
  );
};


function VehicleUnit ({vehicleData}){


  return (
    <Button variant='contained' color='paperButton' sx={{'margin': '10px', 'padding': '10px'}}>

    <Stack direction='row' alignItems='center' justifyContent='space-between' sx={{'width': "100%"}}>
      <Typography align='left' variant={'h6'}>{vehicleData.make} {vehicleData.model}</Typography>
      <Typography align='right' sx={{'opacity':'0.7'}}>{vehicleData.year}</Typography>
    </Stack>



    </Button>
  );
}