import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import picPSU from '../assets/PSU-logo.png'
import picSY from '../assets/SY-logo.png'
import '../styles/Education.css'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  padding: theme.spacing(1),
  textAlign: 'left',
  color: 'black',
}));

function Education() {
  return (

    <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
        <Item className='box'>
          
            <img src={picPSU} alt='PSU' className='pic-logo'/>

          <div> 
            <h1> 2020-2024 </h1>
            <h2> Prince of Songkla University Hat Yai Campus</h2>
            <h3> Faculty of Science (Computer Science)  </h3>
            <h3> GPA 3.44 </h3>
          </div>
        </Item>

        <Item className='box'>
        
            <img src={picSY} alt='SY' className='pic-logo'/>
          
          <div> 
            <h1> 2017-2019 </h1>
            <h2> Satree Yala School </h2>
            <h3> Enrichment Program of Science, Mathematics, Technology and Environment (SMTE)  </h3>
            <h3> GPA 3.72 </h3>
          </div>
        </Item>
        
      </Stack>
    </Box>

  )
}

export default Education