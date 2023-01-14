import React, {useState} from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";
import {ProfileDataReduxForm} from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    const [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            setEditMode(false);
        })
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} alt={'avatar'}/>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                {editMode ? <ProfileDataReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit}/> :
                    <ProfileData profile={profile}
                                 isOwner={isOwner}
                                 activateEditMode={() => {
                                     setEditMode(true)
                                 }}/>}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}

const Contact = ({contactTitle, contactValue}) => {
    return (
        <div className={s.contact}>
            {contactTitle}:{contactValue}
        </div>
    )
}

const ProfileData = (props) => {
    return (
        <div>
            <h2>{props.profile.fullName}</h2>
            <div>
                {props.isOwner ? <button onClick={props.activateEditMode}>edit</button> : ''}
            </div>
            <div>Searching for a job: {props.profile.lookingForAJob ? "yes" : "no"}</div>
            <div>About me: {props.profile.aboutMe}</div>
            <div>My professional skills: {props.profile.lookingForAJobDescription}</div>
            <div>Contacts {Object.keys(props.profile.contacts).map((key, index) => {
                return <Contact key={index} contactTitle={key} contactValue={props.profile.contacts[key]}/>
            })}</div>
        </div>
    )
}


export default ProfileInfo;