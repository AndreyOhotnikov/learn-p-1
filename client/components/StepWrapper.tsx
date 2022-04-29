import { Box, Button, Card, Container, Grid, Step, StepLabel, Stepper } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import { ITrack } from '../types/track';
import TrackItem from './TrackItem';


interface StepWrapperProps {
  activeStep: number;
  children: any;

}
const steps = ['Инормация о треке', "Загрузите обложку", "Загрузите трек"]
const StepWrapper: React.FC<StepWrapperProps> = ({children, activeStep}) => {
  const router = useRouter()
 

  
  return (
    <Container >
        <Stepper activeStep={activeStep}>
          {steps.map((step, index) => 
              <Step key={index} completed={activeStep > index}>
                <StepLabel>{step}</StepLabel>
              </Step>
            )}
        </Stepper>
        <Grid container justifyContent='center' style={{margin: '70px 0', height: 270}}>
            <Card style={{width: 600}}>
              {children}
            </Card>
        </Grid>
    </Container> 
  )
}

export default StepWrapper
