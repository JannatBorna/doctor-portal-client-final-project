import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

const appointmentBanner ={
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 58, 74, 0.8)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175
    
}
const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                     style={{width: 400, marginTop: -110}}
                     src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', 
                justifyContent: 'flex-start',
                alignContent: 'center',
                textAlign: 'left'
                }}>
                    
                    <Box>
                        <Typography variant="h6" sx={{mb:5}} style={{ color: '#49A1AD' }}>
                            Appointment
                        </Typography>

                        <Typography variant="h4" style={{ color: 'white' }}>
                            Make and Appointment today
                        </Typography>

                        <Typography variant="h6" sx={{ my: 5 }} style={{ color: 'white', fontSize: '10', fontWeight: 300 }}>
                            As the richest doctor on earth, Patrick Soon  turned entrepreneur turned philanthropist who is worth close to $12 billion. Physicians most often expect to retire around according to a systematic review of 65 studies published on Nov.
                        </Typography>
                        <br />
                        <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}>Learn More</Button>
                    </Box>



                </Grid>
             </Grid>
        </Box>
    );
};

export default AppointmentBanner;