import { Box, Button, Card, Grid, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import { useState } from 'react';
import FileUpload from '../../components/FileUpload';
import StepWrapper from '../../components/StepWrapper';
import TrackList from '../../components/TrackList';
import { useInput } from '../../hooks/useInput';
import MyLayout from '../../layout/MyLyout';
import { ITrack } from '../../types/track';

const CreatePage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [picture, setPictupe] = useState(null);
  const [audio, setAudio] = useState(null);
  const name = useInput('');
  const artist = useInput('');
  const text = useInput('');
  const next = () => {
    setActiveStep(prev=> prev + 1);
  }

  const back = () => {
    setActiveStep(prev=> prev - 1);
  }
 
  return (
  <MyLayout>
    
    <StepWrapper activeStep={activeStep} >
     {activeStep === 0 && 
        <Grid container direction={'column'} style={{padding: 20}}>
          <TextField
          {...name}
            style={{marginTop: 10}}
            label={'Название трека'}
          />
          <TextField
          {...artist}
            style={{marginTop: 10}}
            label={'Имя исполнителя'}
          />
           <TextField
           {...text}
            style={{marginTop: 10}}
            label={'Слова к треку'}
            multiline
            rows={4}
          />
        </Grid>
     }
     {activeStep === 1 && 
        <FileUpload file={''} setFile={setPictupe} accept='image/*'>
        <Button>Загрузите изображение</Button>
      </FileUpload>
     }
     {activeStep === 2 && 
        <FileUpload file={''} setFile={setAudio} accept='audio/*'>
          <Button>Загрузите аудио</Button>
        </FileUpload>
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
