import { Dispatch } from "react"
import { TrackAction, TrackActionTypes } from "../../types/track"

export const fetchTracks = () => {
  return async (dispatch: Dispatch<TrackAction>) => {
    try {
      const response = await axios
    } catch (error) {
      dispatch({
        type: TrackActionTypes.FETCH_TRACKS_ERROR, 
        payload: 'Произошла ошибка при загрузке файла'
      })
    }
  }
}

