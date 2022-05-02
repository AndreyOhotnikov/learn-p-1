import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material';
import { Grid, IconButton, useRadioGroup } from '@mui/material';
import React from 'react';
import { ITrack } from '../types/track';
import style from '../styles/Player.module.scss'
import TrackProgress from './TrackProgress';
import { useTypedSelector } from '../hooks/useTypeDSelector';
import { useActions } from '../hooks/useActions';
import { useEffect } from 'react';

interface PlayerProps {
  file: any;
  setFile: Function
  accept: string;
  children: any
}

let audio;

const Player: React.FC<PlayerProps> = ({file, setFile, accept, children}) => {
  const {pause, volume, active, duration, currentTime} = useTypedSelector(state => state.player)
  const {pauseTrack, playTrack, setVolume, setCurrentTime, setActive} = useActions()
  
  useEffect(() => {
    if (!audio) {
      audio = new Audio();
      audio.src = active.audio;
      audio.volume = volume / 100
    } 
  }, [])

  const play = () => {
    console.log('fdgdfgdfg')
    if (pause) {
      playTrack();
      audio.play();
    } else {
      pauseTrack();
      audio.pause();
    }
  }

  const chengeVoluve = (e: React.ChangeEvent<HTMLInputElement>) => {
    audio.volume = Number(e.target.value) / 100
    setVolume(Number(e.target.value))
  }

  
  return (
    <div className={style.player}>
     <IconButton onClick={play}>
        {active
        ? <Pause/>
        : <PlayArrow/>
        }
      </IconButton>
      <Grid container direction='column' style={{width: '200px', margin: '0 20px'}}>
        <div>{active?.name}</div>
        <div style={{fontSize: 12, color: 'gray'}}>{active?.artist}</div>
      </Grid>
      <TrackProgress left={0} right={100} onChenge={() => {}}/>
      <VolumeUp style={{marginLeft: 'auto'}}/>
      <TrackProgress left={volume} right={100} onChenge={chengeVoluve}/>

    </div>
    )
}

export default Player
