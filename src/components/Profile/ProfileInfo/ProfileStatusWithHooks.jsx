import React, {useState} from "react";
import s from './ProfileInfo.module.css';


const ProfileStatusWithHooks = (props) => {
    console.log("render")
    let [editMode, setEditMode] = useState(false)



    return (
        <div>
            {!editMode &&
                <div>
                    Status:
                    <span >{props.status}</span>
                </div>
            }
            {editMode &&
                <div>
                    Status:
                    <input autoFocus />
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;