import React, {useState} from "react";
import s from './ProfileInfo.module.css';


const ProfileStatusWithHooks = (props) => {
    console.log("render")
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
                <div>
                    Status:
                    <span onDoubleClick={activateEditMode}>{status}</span>
                </div>
            }
            {editMode &&
                <div>
                    Status:
                    <input autoFocus onBlur={deactivateEditMode} onChange={onStatusChange} value={status}/>
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;