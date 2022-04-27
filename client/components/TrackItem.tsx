import { Box, Button, Card, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import { ITrack } from '../types/track';


interface TrackItemProps {
  track: ITrack;
  active?: boolean

}

const TrackItem: React.FC<TrackItemProps> = ({track, active=false}) => {
  const router = useRouter()
 

  
  return (
    <Grid container direction='column'>
          {track.name}
    </Grid>
  )
}

export default TrackItem
