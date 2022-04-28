import { Box, Button, Card, Grid, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import TrackList from '../../components/TrackList';
import MyLayout from '../../layout/MyLyout';
import { ITrack } from '../../types/track';

const CreatePage = () => {
 
  return (
  <MyLayout>
    
    <div>
     Загрузить Трек
    </div>
  </MyLayout>
  )
}

export default CreatePage
