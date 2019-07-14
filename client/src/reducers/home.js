import { HOME } from '../actions/types';

const initialState = {
  initialPosts: []
}

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case HOME.FETCH_POSTS:
      return {
        ...state,
        initialPosts: payload
      }
    default:
      return state;
  }
}