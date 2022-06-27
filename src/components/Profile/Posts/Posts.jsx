import React, { useEffect, useState } from 'react';
import s from './Posts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  /* Hook */ 
  const [value, setValue] = useState('') 
  
  /* Add new post */ 
  let onAddPost = () => {
    props.addPost(value);
    setValue('')
  }

  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea onChange={(e) => setValue(e.target.value)} value={value} placeholder={'My new post'} />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div>New post</div>
      <div className={s.posts}>
        {props.posts.map(p => <Post message={p.message} likesCount key={p.likesCount} />)}
      </div>
    </div>
  );
}

export default MyPosts;
