import { Box, Button, Card, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import TrackList from '../../components/TrackList';
import { useTypedSelector } from '../../hooks/useTypeDSelector';
import MyLayout from '../../layout/MyLyout';
import { NextThunkDispatch, wrapper } from '../../store';
import { fetchTracks } from '../../store/action-creators/track';
import { ITrack } from '../../types/track';

const Index = () => {
  const router = useRouter()
  const {tracks, error} = useTypedSelector(state => state.track)

  if (error) return (
    <MyLayout>
      <h1>{error}</h1>
    </MyLayout>
  )
  
  return (
  <MyLayout>
    <Grid container justifyContent='center'>
      <Card style={{width: '900px'}}>
        <Box p={3}>
          <Grid container justifyContent='space-between'>
            <h1>Список треков</h1>
            <Button onClick={()=> router.push('/tracks/create')}>
              Загрузить
            </Button>
          </Grid>
        </Box>
        <TrackList tracks={tracks}/>
      </Card>
    </Grid>
  </MyLayout>
  )
}

export default Index

export const getServerSideProps = wrapper.getServerSideProps(async ({store}) => {
  const dispatch = store.disptch as NextThunkDispatch
  store.dispatch(await fetchTracks())
})
