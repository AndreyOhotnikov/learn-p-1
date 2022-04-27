import { Box, Button, Card, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import TrackList from '../../components/TrackList';
import MyLayout from '../../layout/MyLyout';
import { ITrack } from '../../types/track';

const Index = () => {
  const router = useRouter()
  const tracks: ITrack[] = [
    {_id: 'sdfsdf', name: 'fgdfg1'},
    {_id: 'sdfdgfgf', name: 'fgdfg2'},

    {_id: 'sdfnvf', name: 'fgdfg3'},

    {_id: 'sdfwertdf', name: 'fgdfg4'},
    {_id: 'sdfgsdfsdf', name: 'fgdfg5'},
    {_id: 'sdbcdf', name: 'fgdfg6'},
    {_id: 'sdfdfgf', name: 'fgdfg7'},


  ]

  
  return (
  <MyLayout>
    <Grid container justifyContent='center'>
      <Card style={{width: '900px'}}>
        <Box p={3}>
          <Grid container justifyContent='space-between'>
            <h1>Список треков</h1>
            <Button onClick={()=> router.push('/track/create')}>
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
