import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const Register = ({ register, auth }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { name, email, password, confirmPassword } = formData;

  const onChange = (e) => setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log('not same');
    } else {
      register({name, email, password});
    }
  }

  if (auth.isAuthenticated) {
    return <Redirect to="/dashboard" />
  }

  return (
    <form className="register" action="create-profile.html" onSubmit={e => onSubmit(e)}>
      <input
        onChange={e => onChange(e)}
        type="text"
        value={name}
        name="name"
        placeholder="Full Name"
      />
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
      <input
        onChange={e => onChange(e)}
        type="text"
        value={confirmPassword}
        name="confirmPassword"
        placeholder="Confirm Password"
      />
      <input type="submit" className="btn btn-primary" value="Register" />
    </form>
  );
}

export default Register;
