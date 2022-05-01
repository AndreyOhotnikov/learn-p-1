import { ITrack } from "./track";

export interface PlayerState {
  active: null | ITrack;
  volume: number;
  duration: number;
  currentTime: number;
  pause: boolean;
}

export enum PlayerActionTypes {
  PLAY = 'PLAY',
  PAUSE='PAUSE',
  SET_DURATION='SET_DURATION',
  SET_CTIVE,
  
}
