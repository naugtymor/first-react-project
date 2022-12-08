import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <h2>{props.profile.fullName}</h2>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                <div>Searching for a job: {props.profile.lookingForAJobDescription}</div>
            </div>
        </div>
    )
}

export default ProfileInfo;