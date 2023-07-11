import React from 'react';
import {useEffect, useState} from 'react';

import {Container, Box, Paper, Stack, Typography, Button} from '@mui/material';

import axios from 'axios';

export default function VehicleList (){

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
      <Paper sx={{'border-radius': '25px', 'max-width': '100%'}} elevation='1'>

        <Header/>
        <List vehicles={vehicles}/>

      </Paper>
    </Container>
  );
};

function Header () {
  return (
    <Stack direction='row' justifyContent='flex-start' sx={{'border-radius':'25px 25px 0px 0px','background-color': '#212121', 'width': '100%', 'height': '70px'}}>

      <Typography variant='h3' sx={{}}>Vehicles</Typography>

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


  return (
    <Button variant='contained' color='paperButton' sx={{'margin': '10px', 'padding': '10px'}}>

    <Stack direction='row' alignItems='center' justifyContent='space-between' sx={{'width': "100%"}}>
      <Typography align='left' variant={'h6'}>{vehicleData.make} {vehicleData.model}</Typography>
      <Typography align='right' sx={{'opacity':'0.7'}}>{vehicleData.year}</Typography>
    </Stack>



    </Button>
  );
}