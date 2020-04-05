import { 
  ADD_VIDEO, 
  SET_VIDEO_TO_PLAY 
} from "../constants/action-types";
import axios from 'axios';
import { BASE_URL } from '../config.js';

export function addVideo(payload) {
  return { 
    type: ADD_VIDEO, 
    payload 
  }
};

export function setVideoToPlay(payload) {
  return { 
    type: SET_VIDEO_TO_PLAY, 
    payload 
  }
};

export function getVideo() {
  return (dispatch) => {
    return axios.get(BASE_URL + 'allVideo').then((response) => {
      dispatch({ type: ADD_VIDEO, payload: response.data });
    }).catch((error) => {
      console.error(error);
    }).finally(() => {
    });      
  };
}

export function uploadVideo(payload) {
  return (dispatch) => {
    const data = new FormData();
    data.append('file', payload);
    return axios.post(BASE_URL + 'upload', data, {}).then(res => {
      dispatch({ type: ADD_VIDEO, payload: payload.name });
      dispatch({ type: SET_VIDEO_TO_PLAY, payload: payload.name });
    }).catch((error) => {
      console.log(error);
    }).finally(() => {
    });   
  };
}