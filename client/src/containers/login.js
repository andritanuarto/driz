import { connect } from 'react-redux';
import { login } from '../actions/auth';
import Login from '../components/login';

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => {
      dispatch(login(email, password))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);