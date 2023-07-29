import React from 'react';

import { useState} from 'react';

import { Box, Paper, Stack, Typography, Button, Dialog, TextField} from '@mui/material';
import {LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


import axios from 'axios';
import {formatDateTime} from '../helperFunctions.js';

export default function AddMiles({carId, open, onClose}){

  var [mileage, setMileage] = useState(0);
  var [dateOccured, setDateOccured] = useState('');

  var submitForm = ()=>{
    console.log(carId, mileage);
    console.log(dateOccured);
    axios.post(`/vehicles/${carId}/data/miles`,{
      carId: carId,
      mileage: mileage,
      dateAdded: formatDateTime(new Date().toISOString()),
      dateOccured: dateOccured
    })
    .then((response)=>{
      location.reload();
    })
    .catch((err)=>{
      console.log(err);
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
          <DatePicker label="Date Traveled" onChange={(value)=>{setDateOccured(formatDateTime(new Date(value.$d).toISOString()))}}/>

        </LocalizationProvider>

        <Button variant='contained' color='success' onClick={submitForm}>Submit</Button>
      </Stack>
  )
}