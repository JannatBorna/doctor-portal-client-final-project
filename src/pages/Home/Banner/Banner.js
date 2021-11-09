import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png';
import { Button } from '@mui/material';
import { Box } from '@mui/system';



const bannerBg = {
    background: `url(${bg})`,
   
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}



const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{...verticalCenter,textAlign: 'left'}} xs={12} md={6}>
                    <Box>
                        <Typography variant="h3" >
                            Your New Smile <br />
                            Starts Here
                        </Typography>

                        <Typography variant="h6" sx={{ my:5, fontSize: 13, fontWeight: 300, color: 'gray' }}>
                            A dental surgeon or a dentist is a doctor who gains specialization in dentistry, which includes diagnosis, prevention & treatment of oral diseases and conditions. They provide both medical them a doctor.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}>Get Appointment</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                   <img style={{width: '350px'}} src={chair} alt="" />
                </Grid>
                
            </Grid>
        </Container>
    );
};

export default Banner;