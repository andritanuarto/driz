import React, { useState, Fragment} from 'react';
import { Redirect } from 'react-router-dom';
import Header from './header';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = e => setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  }

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />
  }

  return (
    <Fragment>
      <Header/>
      <form className="register" action="create-profile.html" onSubmit={e => onSubmit(e)}>
        <input
          onChange={e => onChange(e)}
          type="text"
          value={email}
          name="email"
          placeholder="E-mail"
        />
        <input
          onChange={e => onChange(e)}
          type="text"
          value={password}
          name="password"
          placeholder="Password"
        />
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
    </Fragment>
  );
}

export default Login;