import React, {useState} from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";
import ProfileDataForm from "./ProfileDataForm";


const ProfileInfo = (props) => {

    const [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }


    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large || userPhoto}/>
                {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                {editMode ? <ProfileDataForm profile={props.profile}/> :
                    <ProfileData profile={props.profile}
                                 isOwner={props.isOwner}
                                 activateEditMode={() => {
                                     setEditMode(true)
                                 }}/>}
                <ProfileStatusWithHooks status={props.status}
                                        updateStatus={props.updateStatus}/>

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
            <div>Contacts {Object.keys(props.profile.contacts).map(key => {
                return <Contact contactTitle={key} contactValue={props.profile.contacts[key]}/>
            })}</div>
        </div>
    )
}


export default ProfileInfo;