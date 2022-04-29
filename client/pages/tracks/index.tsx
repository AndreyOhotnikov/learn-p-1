import { Box, Button, Card, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import TrackList from '../../components/TrackList';
import MyLayout from '../../layout/MyLyout';
import { ITrack } from '../../types/track';

const Index = () => {
  const router = useRouter()
  const tracks: ITrack[] = [
    {_id: '1', name: 'yfpdfybt 1', artist: 'sdfgsdg1', text: 'sdfsdfgsfbfdbxbfbxbgbxbx', picture: 'https://kaifolog.ru/uploads/posts/2014-12/thumbs/1419387276_001_1.jpg', listens: 0},
    {_id: '2', name: 'yfpdfybt 2', artist: 'sdfgsdg2', text: 'sdfsdfgsfbfdbxbfbxbgbxbx', picture: 'https://kaifolog.ru/uploads/posts/2014-12/thumbs/1419387276_001_1.jpg', listens: 0},
    {_id: '3', name: 'yfpdfybt 3', artist: 'sdfgsdg3', text: 'sdfsdfgsfbfdbxbfbxbgbxbx', picture: 'https://kaifolog.ru/uploads/posts/2014-12/thumbs/1419387276_001_1.jpg', listens: 0},
    {_id: '4', name: 'yfpdfybt 4', artist: 'sdfgsdg4', text: 'sdfsdfgsfbfdbxbfbxbgbxbx', picture: 'https://kaifolog.ru/uploads/posts/2014-12/thumbs/1419387276_001_1.jpg', listens: 0},
    {_id: '5', name: 'yfpdfybt 5', artist: 'sdfgsdg5', text: 'sdfsdfgsfbfdbxbfbxbgbxbx', picture: 'https://kaifolog.ru/uploads/posts/2014-12/thumbs/1419387276_001_1.jpg', listens: 0},
    {_id: '6', name: 'yfpdfybt 6', artist: 'sdfgsdg6', text: 'sdfsdfgsfbfdbxbfbxbgbxbx', picture: 'https://kaifolog.ru/uploads/posts/2014-12/thumbs/1419387276_001_1.jpg', listens: 0},
    {_id: '7', name: 'yfpdfybt 7', artist: 'sdfgsdg7', text: 'sdfsdfgsfbfdbxbfbxbgbxbx', picture: 'https://kaifolog.ru/uploads/posts/2014-12/thumbs/1419387276_001_1.jpg', listens: 0},


  ]

  
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
