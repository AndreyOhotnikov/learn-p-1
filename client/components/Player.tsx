import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material';
import { Box, Button, Card, Grid, IconButton } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import { Children } from 'react';
import { useRef } from 'react';
import { ITrack } from '../types/track';
import TrackItem from './TrackItem';
import style from '../styles/Player.module.scss'
import TrackProgress from './TrackProgress';

interface PlayerProps {
  file: any;
  setFile: Function
  accept: string;
  children: any
}
const track: ITrack = {
  _id: '2', 
  name: 'yfpdfybt 1', 
  artist: 'sdfgsdg', 
  text: 'sdfsdfgsfbfdbxbfbxbgbxbx', 
  picture: 'https://kaifolog.ru/uploads/posts/2014-12/thumbs/1419387276_001_1.jpg', 
  listens: 0,
  comments: []
}

const Player: React.FC<PlayerProps> = ({file, setFile, accept, children}) => {
  const active = false
  
  return (
    <div className={style.player}>
     <IconButton onClick={e => e.stopPropagation()}>
        {active
        ? <Pause/>
        : <PlayArrow/>
        }
      </IconButton>
      <Grid container direction='column' style={{width: '200px', margin: '0 20px'}}>
        <div>{track.name}</div>
        <div style={{fontSize: 12, color: 'gray'}}>{track.artist}</div>
      </Grid>
      <TrackProgress left={0} right={100} onChenge={() => {}}/>
      <VolumeUp style={{marginLeft: 'auto'}}/>
      <TrackProgress left={0} right={100} onChenge={() => {}}/>

    </div>
    )
}

export default Player
