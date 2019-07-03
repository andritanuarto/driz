import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  return (
    <form className="register" action="create-profile.html">
    <input
      // onChange={e => onChange(e)}
      type="text"
      // value={email}
      name="email"
      placeholder="E-mail"
    />
    <input
      // onChange={e => onChange(e)}
      type="text"
      // value={password}
      name="password"
      placeholder="Password"
    />
    <input type="submit" className="btn btn-primary" value="Login" />
  </form>
  );
}

export default Login;