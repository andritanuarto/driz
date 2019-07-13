import React, { useState, Fragment } from 'react';
import InlineSVG from 'svg-inline-react'
import { SVG } from '../utils/svg'

const Header = () => {
  const [headerState, setdropdown] = useState({
    dropdownOpen: false,
  });

  const { dropdownOpen } = headerState;

  const dropdownToggle = (e) => setdropdown({
    ...setdropdown,
    dropdownOpen: !dropdownOpen
  });

  return (
    <div className="header">
      <InlineSVG  className="driz" src={SVG.DRIZ} raw width="50" height="15"/>

    </div>
  );
}

export default Header;