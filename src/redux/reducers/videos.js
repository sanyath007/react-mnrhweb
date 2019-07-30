import { ADD_VIDEOS } from '../actionTypes';

const initialState = {
  videos: [
    {
      id: 1,
      url: 'https://www.youtube.com/embed/U5MqzkO2STc'
    },
    {
      id: 2,
      url: 'https://www.youtube.com/embed/TB_ABaF0_RQ'
    }
  ]
};

const videos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_VIDEOS: {
      return {
        ...state
      };
    }
    default: {
      return state;
    }
  }
};

export default videos;
