import React, { useState, Fragment } from 'react';

const Header = () => {
  const [headerState, setdropdown] = useState({
    dropdownOpen: false,
  });

  const { dropdownOpen } = headerState;

  const dropdownToggle = (e) => setdropdown({
    ...setdropdown,
    dropdownOpen: !dropdownOpen
  });


  console.log(headerState);

  return (
    <div className="header">
      <div className="driz"/>
      <button onClick={dropdownToggle}>click</button>
      <ul>
        <li>Login</li>
        <li>Register</li>
      </ul>

    </div>
  );
}

export default Header;