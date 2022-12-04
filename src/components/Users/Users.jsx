import React from "react";
import s from "./Users.module.css";
import {Paginator} from "../common/Paginator/Paginator";
import User from "./User";

let Users = (props) => {
    return (
        <div className={s.usersList}>
            <Paginator totalUsersCount={props.totalUsersCount}
                       pageSize={props.pageSize}
                       currentPage={props.currentPage}
                       onPageChange={props.onPageChange}/>
            {
                props.users.map((u, index) => <User key={index}
                                                    user={u}
                                                    toggleInProgress={props.toggleInProgress}
                                                    follow={props.follow}
                                                    unfollow={props.unfollow}/>)
            }
        </div>
    )
}

export default Users;