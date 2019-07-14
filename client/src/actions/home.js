import { HOME } from '../actions/types';

export const fetchPosts = (posts) =>  {
  return {
    type: HOME.FETCH_POSTS,
    payload: posts
  }
}