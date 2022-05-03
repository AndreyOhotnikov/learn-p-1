import { Box, Button, Card, Grid, TextField } from '@mui/material';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { useState } from 'react';
import TrackList from '../../components/TrackList';
import MyLayout from '../../layout/MyLyout';
import { ITrack } from '../../types/track';

const TrackPage = ({serverTrack}) => {
  const [track, setTrack] = useState(serverTrack)
  const router = useRouter()

  const addComment = () => {

  }


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
      <img src={'http://loclhost:5000/' + track.picture} width={200} height={200} alt="" />
      <div style={{margin: '20px 0'}}>
        <h1>Название трека - {track.name}</h1>
        <h1>Исполитель - {track.artist}</h1>
        <h1>Прослушиваний - {track.listens}</h1>
      </div>
    </Grid>
    <h1>Слова к треку</h1>
    <p>{track.text}</p>
    <h1>Комментарии</h1>
    <Grid container>
      <TextField
        label="Ваше имя"
        fullWidth
      />
       <TextField
        label="Комментарий"
        fullWidth
        multiline
        rows={4}
      />
      <Button>Отправить</Button>
    </Grid>
    <div>
      {track.comments.map(comm => 
          <div>
            <div>Автор - {comm.username}</div>
            <div>Комментарий - {comm.text}</div>
          </div>
        )}
    </div>
  </MyLayout>
  )
}

export default TrackPage

export const getServerSideProps: GetServerSideProps = async ({params}) => {
  const response = await axios.get('http://loclhost:5000/tracks/' + params.id)
  return {
    props: {
      serverTrack: response.data
    }
  }
}
