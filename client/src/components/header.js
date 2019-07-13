import React from 'react';
import InlineSVG from 'svg-inline-react'
import { SVG } from '../utils/svg'

const Header = () => {
  return (
    <div className="header">
      <i className="material-icons">menu</i>
      <InlineSVG  className="driz" src={SVG.DRIZ} raw width="50" height="20"/>
      <i className="material-icons">search</i>
    </div>
  );
}

export default Header;