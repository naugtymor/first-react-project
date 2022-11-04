import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img src='https://i.redd.it/a0ez44uhhx911.jpg' alt={'description of image'}/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <h2>ava + description</h2>
                {/*дз: распаковать запрос и отобразить больше инфы*/}
            </div>
        </div>
    )
}

export default ProfileInfo;