import { Pause, PlayArrow } from '@mui/icons-material';
import { Box, Button, Card, Grid, IconButton } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import { Children } from 'react';
import { useRef } from 'react';
import { ITrack } from '../types/track';
import TrackItem from './TrackItem';
import style from '../styles/Player.module.scss'

interface PlayerProps {
  file: any;
  setFile: Function
  accept: string;
  children: any
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
    </div>
    )
}

export default Player
