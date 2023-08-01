import React from 'react';
import {Container, Paper, Stack, Typography, Button, Box} from '@mui/material';

export default function MainHeader (){

  return (
    <Paper sx={{'borderRadius': '25px', 'maxWidth': '100%', 'textAlign': 'center', 'borderRadius': '0', 'marginBottom': '10px'}} elevation={1}>
      <Typography variant='h3'>VroomLog</Typography>
    </Paper>
  );
};