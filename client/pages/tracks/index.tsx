import { Box, Button, Card, Grid, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TrackList from '../../components/TrackList';
import { useTypedSelector } from '../../hooks/useTypeDSelector';
import MyLayout from '../../layout/MyLyout';
import {NextThunkDispatch, wrapper} from "../../store";
import { fetchTracks, searchTracks } from '../../store/action-creators/track';
import { ITrack } from '../../types/track';

const Index = () => {
  const router = useRouter()
  const {tracks, error} = useTypedSelector(state => state.track)
  const [query, setQuery] = useState<string>('');
  const dispatch = useDispatch() as NextThunkDispatch;
  const [timer, setTimer] = useState(null);


  const search = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
    if (timer) {
      clearTimeout(timer);
    }

    setTimer(
      setTimeout(async () => {
        await dispatch(await searchTracks(e.target.value))
      }, 500)
    )
    
  }

  if (error) return (
    <MyLayout>
      <h1>{error}</h1>
    </MyLayout>
  )
  
  return (
  <MyLayout title={'Список треков - музыкальная платформа'}>
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
        <TextField
          fullWidth
          value={query}
          onChange={search}
        />
        <TrackList tracks={tracks}/>
      </Card>
    </Grid>
  </MyLayout>
  )
}

export default Index

export const getServerSideProps = wrapper.getServerSideProps(async ({store}) => {
  const dispatch = store.dispatch as NextThunkDispatch
  await dispatch(await fetchTracks())
})
