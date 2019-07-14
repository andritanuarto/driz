import React, { useEffect } from 'react';
import Header from './header';
import axios from 'axios';

const Public = ({ fetchPosts }) => {
  useEffect(() => {
    axios.get('api/posts').then((response) => {
      fetchPosts(response.data);
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