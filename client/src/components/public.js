import React, { useEffect } from 'react';
import Header from './header';
import axios from 'axios';

const Public = ({ fetchPosts, home }) => {
  const { initialPosts } = home;

  useEffect(() => {
    axios.get('api/posts').then((response) => {
      fetchPosts(response.data);
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  console.log(initialPosts.length);

  return (
    <div className="public">
      <Header/>
      <div className="content">
        {
          initialPosts.map((post) => {
            return (
              <div key={post._id}>
                {post.text}
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default Public;