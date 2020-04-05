import { 
  ADD_VIDEO, 
  SET_VIDEO_TO_PLAY 
} from "../constants/action-types";

const initialState = {
  videos: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_VIDEO) {
    if (!state.videos.includes(action.payload)) {
      return Object.assign({}, state, {
        videos: state.videos.concat(action.payload)
      });
    }
  }

  if (action.type === SET_VIDEO_TO_PLAY) {
    return {
      ...state,
      videoToPlay: action.payload,
    }
  }

  return state;
};

export default rootReducer;