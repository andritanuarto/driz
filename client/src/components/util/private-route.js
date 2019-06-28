import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      render={
        props => auth.isAuthenticated === true
        ? <Component {...props} />
        :  <Redirect to="/" />
      }
      {...rest}
    />
  )
};

PrivateRoute.propTypes = {
  auth: PropTypes.object,
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);