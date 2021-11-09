import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Service from './../Service/Service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';

const services = [
    {
        name: 'Fluoride Treatment',
        description: 'Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a persons teeth to improve health and reduce the risk of cavities.',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        description: 'Cavity is in the beginning stages of formation, it cannot heal naturally, especially for one that has broken through the dentin. When you start feeling pain in the localized tooth, its a sign that the damage is too significant.',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        description: 'Whitening your teeth too often increases the risk of negative side effects, such as tooth sensitivity and damage to tooth enamel and gums. But there no official guideline for how often whitening can be done safely.',
        img: whitening
    }
]










const Services = () => {
    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 500, m: 2, color: 'success.main' }} variant="h6" component="div">
                    OUR SERVICES
                </Typography>
                <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;