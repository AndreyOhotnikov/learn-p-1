import { Box, Button, Card, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import { ITrack } from '../types/track';
import TrackItem from './TrackItem';


interface TrackProgresProps {
  left: number;
  right: number;
  onChenge: (e) => void
}

const TrackProgres: React.FC<TrackProgresProps> = ({left, right, onChenge}) => {
  const router = useRouter()
 

  
  return (
    <div style={{display: 'flex'}}>
       <input 
        type="range" 
        min={0}
        max={right}
        value={left}
        onChange={onChenge}
       />
       <div>{left} / {right}</div>
    </div>
  )
}

export default TrackProgres
