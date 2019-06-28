import { connect } from 'react-redux';
import { register } from '../actions/auth';
import Register from '../components/register';

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (userDetail) => {
      dispatch(register(userDetail));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);