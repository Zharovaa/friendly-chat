import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';


const Profile = () => {
    return <div className={s.content}>
        <div>
            <img src ='https://swall.teahub.io/photos/small/0-7025_nature-wallpaper-with-flowers-image-good-morning-photo.jpg'></img>
        </div>
        <div>
            ava + descr
        </div>
        <MyPosts />
    </div>
}

export default Profile;