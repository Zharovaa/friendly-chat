import React from 'react';
import s from './Post.module.css';

const Post = () => {
  return (
    <div className={s.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbvYBi8HjWwL2ILkUP3iSr26KrR6CJWnqK6w&usqp=CAU"></img>
      post 1
      <div>
        <span>like</span>
      </div>
    </div>
  );
};

export default Post;
