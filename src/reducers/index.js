import { 
  ADD_VIDEO, 
  SET_VIDEO_TO_PLAY 
} from "../constants/action-types";

const initialState = {
  videos: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_VIDEO:
      if (!state.videos.includes(action.payload)) {
        return Object.assign({}, state, {
          videos: state.videos.concat(action.payload)
        });
      }
    case SET_VIDEO_TO_PLAY:  
      return {
        ...state,
        videoToPlay: action.payload,
      }    
    default:
      return state;
  }
};

export default rootReducer;