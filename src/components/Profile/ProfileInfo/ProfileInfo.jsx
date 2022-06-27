import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://swall.teahub.io/photos/small/0-7025_nature-wallpaper-with-flowers-image-good-morning-photo.jpg"/>
            </div>
            <div className={s.descriptionBlock}>ava + descr</div>
        </div>
    )
}

export default ProfileInfo;