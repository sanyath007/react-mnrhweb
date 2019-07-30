import { ADD_GALLERY } from '../actionTypes';

const initialState = {
  galleries: [
    {
      id: 1,
      alt: 'The awesome description',
      picUrl: 'http://lorempixel.com/600/400/cats/?1'
    },
    {
      id: 2,
      alt: 'The awesome description"',
      picUrl: 'http://lorempixel.com/600/400/cats/?2'
    },
    {
      id: 3,
      alt: 'The awesome description"',
      picUrl: 'http://lorempixel.com/600/400/cats/?3'
    },
    {
      id: 4,
      alt: 'The awesome description"',
      picUrl: 'http://lorempixel.com/600/400/cats/?4'
    },
    {
      id: 5,
      alt: 'The awesome description"',
      picUrl: 'http://lorempixel.com/600/400/cats/?5'
    },
    {
      id: 6,
      alt: 'The awesome description"',
      picUrl: 'http://lorempixel.com/600/400/cats/?6'
    }
  ]
};

const gallery = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GALLERY: {
      return {
        ...state
      };
    }
    default: {
      return state;
    }
  }
};

export default gallery;
