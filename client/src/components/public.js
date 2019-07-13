import React, { useEffect } from 'react';
import Header from './header';
import axios from 'axios';

const Public = () => {
  useEffect(() => {
    axios.get('api/posts').then((response) => {
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
    });
  });

  return (
    <div className="public">
      <Header/>
      <div className="content"/>
    </div>
  );
}

export default Public;