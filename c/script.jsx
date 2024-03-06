import React from 'react';
import './Post.css';

const Post = ({ image, text }) => {
  return (
    <div className="post">
            <img src={image} alt="Post image" />
            <p>{text}</p>
        </div>
  );
};

export default Post;