import { Box, Button, Card, Grid, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import TrackList from '../../components/TrackList';
import MyLayout from '../../layout/MyLyout';
import { ITrack } from '../../types/track';

const TrackPage = () => {
  const track: ITrack = {_id: '2', name: 'yfpdfybt 1', artist: 'sdfgsdg', text: 'sdfsdfgsfbfdbxbfbxbgbxbx', picture: 'https://kaifolog.ru/uploads/posts/2014-12/thumbs/1419387276_001_1.jpg', listens: 0}
  const router = useRouter()
  return (
  <MyLayout>
    <Button
      variant={"outlined"} 
      style={{fontSize: 32}}
      onClick={() => router.push('/tracks')}
    >
      К списку
    </Button>
    <Grid container style={{margin: '20px 0'}}>
      <img src={track.picture} width={200} height={200} alt="" />
      <div style={{margin: '20px 0'}}>
        <h1>Название трека - {track.name}</h1>
        <h1>Исполитель - {track.artist}</h1>
        <h1>Прослушиваний - {track.listens}</h1>
      </div>
    </Grid>
    <h1>Слова к треку</h1>
    <p>{track.text}</p>
    <Grid container>
      <TextField
        label="Ваше имя"
        fullWidth

      />
    </Grid>
  </MyLayout>
  )
}

export default TrackPage
