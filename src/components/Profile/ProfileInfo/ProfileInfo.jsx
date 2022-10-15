import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://i.redd.it/a0ez44uhhx911.jpg' alt={'description of image'}/>
            </div>
            <div className={s.descriptionBlock}>
                <h2>ava + description</h2>
            </div>
        </div>
    )
}

export default ProfileInfo;