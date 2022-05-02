import { Card, Grid, IconButton } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import { ITrack } from '../types/track';
import style from '../styles/TrackItem.module.scss'
import { Delete, Pause, PlayArrow } from '@mui/icons-material';
import { useActions } from '../hooks/useActions';

interface TrackItemProps {
  track: ITrack;
  active?: boolean

}

const TrackItem: React.FC<TrackItemProps> = ({track, active=false}) => {
  const router = useRouter()

  const {playTrack, pauseTrack, setActive} = useActions()

  const play = (e) => {
    e.stopPropagation();
    setActive(track);
    playTrack();
  }
 

  
  return (
    <Card className={style.track} onClick={() => router.push('/tracks/' + track._id)}>
      <IconButton onClick={e => e.stopPropagation()}>
        {active
        ? <Pause/>
        : <PlayArrow/>
        }
      </IconButton>
      <img width={70} height={70} src={track.picture} alt="" />
      <Grid container direction='column' style={{width: '200px', margin: '0 20px'}}>
        <div>{track.name}</div>
        <div style={{fontSize: 12, color: 'gray'}}>{track.artist}</div>
      </Grid>
        {active && <div>02:42 / 03:23</div>}
        <IconButton onClick={e => e.stopPropagation()} style={{marginLeft: 'auto'}}>
          <Delete></Delete>
        </IconButton>
          
    </Card>
  )
}

export default TrackItem
