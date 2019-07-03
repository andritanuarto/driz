import { AUTH } from '../actions/types';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';

// Load User
export const loadUser = () => async dispatch => {
  if(localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('/api/auth');
    dispatch({
      type: AUTH.USER_LOADED,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: AUTH.AUTH_ERROR
    })
  }
}

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

export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post('/api/auth', body, config);

    dispatch({
      type: AUTH.LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    // if(errors) {
    //   errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    // }

    dispatch({
      type: AUTH.LOGIN_FAIL
    });
  }
}