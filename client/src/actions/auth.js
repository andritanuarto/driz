import { AUTH } from '../actions/types';

import axios from 'axios';

export const register = ({ name, email, password }) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post('/api/users', body, config);
    dispatch({
      type: AUTH.REGISTER_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH.REGISTER_FAIL
    });
  }
}