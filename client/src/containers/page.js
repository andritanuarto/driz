import { connect } from 'react-redux';
import Page from '../components/page';

const mapStateToProps = (state) => {
  return {
    test: state.test,
    test2: state.test2
  };
};

const mapDispatchToProps = (dispatch) => {
  return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);