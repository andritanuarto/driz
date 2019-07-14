import { AUTH } from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null
}

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch(type) {
    case AUTH.USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload
      }

    case AUTH.REGISTER_SUCCESS:
    case AUTH.LOGIN_SUCCESS:
      console.log(payload.token);
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload
      }

    case AUTH.REGISTER_FAIL:
    case AUTH.LOGIN_FAIL:
    case AUTH.AUTH_ERROR:
        localStorage.removeItem('token');
        return {
          ...state,
          token: null,
          isAuthenticated: false,
          loading: false
        }

        default:
      return state;
  }
}