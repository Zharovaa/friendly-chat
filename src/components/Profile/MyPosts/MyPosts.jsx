import React from "react"; 
import s from './MyPosts.module.css';
import Post from "../Posts/Post";


const MyPosts = () => {
    return <div>
        <textarea></textarea>
        <button>Add post</button>


        <div>
            New post
        </div>
        <div className={s.posts}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
           
    </div>
    </div>

};

export default MyPosts;