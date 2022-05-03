import { Box, Button, Card, Grid, TextField } from '@mui/material';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { useState } from 'react';
import TrackList from '../../components/TrackList';
import { useInput } from '../../hooks/useInput';
import MyLayout from '../../layout/MyLyout';
import { ITrack } from '../../types/track';

const TrackPage = ({serverTrack}) => {
  const [track, setTrack] = useState<ITrack>(serverTrack)
  const router = useRouter()
  const username = useInput('');
  const comment = useInput('');

  const addComment = async () => {
    try {
      const response = await axios.post('http://localhost:5000/tracks/comment', {
        usernme: username.value,
        text: comment.value,
        trackId: track._id 
      })
      setTrack({...track, comments: [...track.comments, response.data]})
    } catch (error) {
      console.log(error);
    }
    
  }


  return (
  <MyLayout 
    title={`Музыкальная площадка -${track.name} - ${track.artist}`}
    keywords={'музыка, артист' + track.name + track.artist}
  >
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
      {...username}
        label="Ваше имя"
        fullWidth
      />
       <TextField
       {...comment}
        label="Комментарий"
        fullWidth
        multiline
        rows={4}
      />
      <Button onClick={addComment}>Отправить</Button>
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
