import React from 'react';

import { useState} from 'react';

import { Box, Paper, Stack, Typography, Button, Dialog, TextField} from '@mui/material';

export default function addVehicle({open, onClose}){

  var [year, setYear] = useState(0);
  var [make, setMake] = useState('');
  var [model, setModel] = useState('');

  return (
    <Dialog open={open} onClose={onClose} maxWidth='lg'>
      <Paper sx={{'height': '50vh', 'width':'50vw'}}>


      <Header/>
      <Form year={year}setYear={setYear} setMake={setMake} setModel={setModel}/>



      </Paper>
    </Dialog>
  )
};

function Header(){
  return (
    <Box sx={{backgroundColor: '#181818', maxWidth: '100%', padding:'15px'}}>
      <Typography variant='h5'>Add New Vehicle</Typography>
    </Box>
  )
}

function Form ({year, setYear, setMake, setModel}){
  return (
    <Stack direction="column" alignItems='center' spacing={2} sx={{margin: '20px'}}>
        <TextField label="Year" type='number' onChange={(e)=>{setYear(e.target.value)}}></TextField>
        <TextField label="Make" onChange={(e)=>{setYear(e.target.value)}}></TextField>
        <TextField label="Model" onChange={(e)=>{setYear(e.target.value)}}></TextField>

        <Button variant='contained' color='success' onClick={()=>{console.log(year)}}>Submit</Button>
      </Stack>
  )
}