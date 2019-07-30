import { ADD_NEWS } from '../actionTypes';

const initialState = {
  newsLists: [
    {
      id: 1,
      topic: '',
      desc: '',
      picUrl: ''
    },
    {
      id: 2,
      topic: '',
      desc: '',
      picUrl: ''
    },
    {
      id: 3,
      topic: '',
      desc: '',
      picUrl: ''
    }
  ]
};

const news = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEWS: {
      return {
        ...state
      };
    }
    default: {
      return state;
    }
  }
};

export default news;
