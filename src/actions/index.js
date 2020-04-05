import { 
  ADD_VIDEO, 
  SET_VIDEO_TO_PLAY 
} from "../constants/action-types";

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