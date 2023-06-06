import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import FacebookIcon from '@mui/icons-material/Facebook';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import '../styles/Contact.css'
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  padding: theme.spacing(1),
  textAlign: 'center',
  color: 'black',
  
}));
function Contact() {
  return (
    

  <Box sx={{ width: '100%' }}  >
    
    <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={12} >
          <Item>
          <h1>
            Contact
          </h1>
        

          <div className='detail-con'>
          <PlaceIcon /> 
           59/13 Moo 1, Tha Sai-Bang Yee, Khlong Hae, Hat Yai , Songkhla 90110
          </div>

          <div className='detail-con'>
          <br /><PhoneIcon /> 
           093-582-2427
          </div>

          <div className='detail-con'>
          <br /><EmailIcon /> 
           piyawan.arakk@gmail.com
          </div>
          
          <div className='detail-con'>
          <br />
          <Link href='https://www.facebook.com/profile.php?id=100003811156812'underline="none"> 
          <FacebookIcon /> 
          </Link> 
           Jaa Piyawan Arakkunakorn
          </div>

          <div className='detail-con'>
          <br />
          <Link href='https://github.com/PiyawanA'underline="none"> 
          <GitHubIcon /> 
          </Link> 
           Jaa Piyawan Arakkunakorn
          </div>
          
        
        </Item>
          
        </Grid>
    </Grid>
  </Box>

  )
}

export default Contact