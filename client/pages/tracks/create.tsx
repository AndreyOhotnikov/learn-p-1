import { Box, Button, Card, Grid, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import { useState } from 'react';
import StepWrapper from '../../components/StepWrapper';
import TrackList from '../../components/TrackList';
import MyLayout from '../../layout/MyLyout';
import { ITrack } from '../../types/track';

const CreatePage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const next = () => {
    setActiveStep(prev=> prev + 1)
  }

  const back = () => {
    setActiveStep(prev=> prev - 1)
  }
 
  return (
  <MyLayout>
    
    <StepWrapper activeStep={activeStep} >
     {activeStep === 0 && 
        <Grid container direction={'column'} style={{padding: 20}}>
          <TextField
            style={{marginTop: 10}}
            label={'Название трека'}
          />
          <TextField
            style={{marginTop: 10}}
            label={'Имя исполнителя'}
          />
           <TextField
            style={{marginTop: 10}}
            label={'Слова к треку'}
            multiline
            rows={4}
          />
        </Grid>
     }
     {activeStep === 1 && 
        <h1>STEP 2</h1>
     }
     {activeStep === 2 && 
        <h1>STEP 3</h1>
     }
    </StepWrapper>
      <Grid justifyContent='space-between'>
        <Button disabled={activeStep === 0} onClick={back}>Назад</Button>
        <Button disabled={activeStep === 2} onClick={next}>Далее</Button>
      </Grid>
  </MyLayout>
  )
}

export default CreatePage
