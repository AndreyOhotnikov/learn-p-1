import { Box, Button, Card, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import { ITrack } from '../types/track';
import TrackItem from './TrackItem';


interface TrackListProps {
  tracks: ITrack[]
}

const TrackList: React.FC<TrackListProps> = ({tracks}) => {
  const router = useRouter()
 

  
  return (
    <Grid container direction='column'>
        <Box p={2}>
          {tracks.map(track => 
            <TrackItem
              key={track._id}
              track={track}
            />
          )}
        </Box>
    </Grid>
  )
}

export default TrackList
