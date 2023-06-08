import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  padding: theme.spacing(1),
  textAlign: 'center',
  color: 'black',
}));

function Skills() {
  return (

  <Box sx={{ width: '100%' }}  >
    
    <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Item>
          <h1>
            Computer Skills
          </h1>
          
            <p> <h3>Programming Language :</h3> HTML, CSS, JavaScript, PHP, C</p>
            <p> <h3>Database :</h3> SQL (phpMyAdmin) </p>
            <p> <h3>Other :</h3> Microsoft Office (Word, Excel, PowerPoint) </p>
          
          </Item>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Item>
          <h1>
            Skills
          </h1>
          <p>
            <li> Learn from mistake</li> <br />
            <li> Flexibility and Adaptability </li> <br />
            <li> Responsibility </li> <br />
            <li> Teamwork </li> <br />
          </p>
          </Item>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Item>
          <h1>
          Language
          </h1>
          
          <p>
            <li> Thai (Native) </li> <br />
            <li> English (Basic) </li><br />
          </p>

          </Item>
        </Grid>

        
      </Grid>
  </Box>

  )
}

export default Skills
