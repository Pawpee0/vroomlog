import React from 'react';

import { useState} from 'react';

import { Box, Paper, Stack, Typography, Button, Dialog, TextField} from '@mui/material';
import {LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


import axios from 'axios';

export default function AddMiles({carId, open, onClose}){

  var [mileage, setMileage] = useState(0);
  var [dateOccured, setDateOccured] = useState('');

  var submitForm = ()=>{
    console.log('running');
    axios.post(`/vehicles/${carId}/mileData`,{
      carId: carId,
      mileage: mileage,
      dateAdded: new Date().toISOString(),
      dateOccured: dateOccured
    })
    .then((response)=>{
      location.reload();
    });
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth='lg'>
      <Paper sx={{'height': '50vh', 'width':'50vw'}}>


      <Header/>
      <Form setMileage={setMileage} setDateOccured={setDateOccured} submitForm={submitForm}/>



      </Paper>
    </Dialog>
  )
};

function Header(){
  return (
    <Box sx={{backgroundColor: '#181818', maxWidth: '100%', padding:'15px'}}>
      <Typography variant='h5'>Add Miles</Typography>
    </Box>
  )
}

function Form ({setMileage, setDateOccured, submitForm}){


  return (
    <Stack direction="column" alignItems='center' spacing={2} sx={{margin: '20px'}}>
        <TextField label="Miles" type='number' onChange={(e)=>{setMileage(e.target.value)}}></TextField>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker label="Date Traveled"/>

        </LocalizationProvider>

        <Button variant='contained' color='success' onClick={submitForm}>Submit</Button>
      </Stack>
  )
}