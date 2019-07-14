import { connect } from 'react-redux';
import Public from '../components/public';
import { fetchPosts } from '../actions/home';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: (posts) => {
      dispatch(fetchPosts(posts));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Public);