import { combineReducers } from 'redux';

const INITIAL_STATE = {
  current: [],
  possible: ['Allie', 'Gator', 'Lizzie', 'Reptar'],
};

const photosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({
  photos: photosReducer,
});
