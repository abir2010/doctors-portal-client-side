import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import chair from '../../../images/chair.png';
import Calender from '../../Shared/Calender/Calender';

const AppointmentHeader = ({date,setDate}) => {
    return (
        <Container style={{marginTop:"20px"}}>
            <Grid container spacing={2}>
                <Grid items xs={12} md={6}>
                    <Typography></Typography>
                    <Calender date={date} setDate={setDate}></Calender>
                </Grid>
                <Grid items xs={12} md={6}>
                    <img src={chair} style={{width:"100%"}} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default AppointmentHeader;