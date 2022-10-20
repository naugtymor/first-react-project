import React from "react";
import s from './Sidebar.module.css';
// import {NavLink} from "react-router-dom";

const Sidebar = (props) => {
    let friendsElements = props.state.friends
        .map((f, index) => <div className={s.item}>
            <img src={`${f.img}`}/>
            <div>
                {f.name}
            </div>
        </div>)

    return (
        <div className={s.sidebar}>
            <div className={s.title}>Friends</div>
            <div className={s.items}>
                {friendsElements}
            </div>
        </div>
    )
}

export default Sidebar;