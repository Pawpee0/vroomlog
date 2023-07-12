import React from 'react';

import { useState} from 'react';

import {Container, Box, Paper, Stack, Typography, Button, Dialog} from '@mui/material';

export default function addVehicle({open, onClose}){
  return (
    <Dialog open={open} onClose={onClose} >
      <Paper sx={{'height': '75vh', 'width':'90vw'}}>

      </Paper>
    </Dialog>
  )
};