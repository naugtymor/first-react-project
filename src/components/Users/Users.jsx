import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {toggleInFollowingProgress} from "../../redux/users-reducer";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let currentPage = props.currentPage;
    let currentPageFirst = ((currentPage - 5) < 0 ? 0 : currentPage - 5);
    let currentPageLast = currentPage + 4;
    let slicedPages = pages.slice(currentPageFirst, currentPageLast);

    return (
        <div className={s.usersList}>
            <div className={s.pagesSelector}>
                {slicedPages.map((p,index) => <span key={index} className={props.currentPage === p ? s.selectedPage : undefined}
                                            onClick={() => {
                                                props.onPageChange(p)
                                            }}>{p + " "}</span>)}
                ...
            </div>
            {
                props.users.map((u, index) => <div key={index}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img className={s.userImg} src={u.photos.small != null ? u.photos.small : userPhoto} alt={'description'}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.toggleInProgress} onClick={() => {
                                    props.toggleInFollowingProgress(true);
                                    axios
                                        .delete(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "a5ec2a6b-4d14-4857-9e4a-ebc7dbcaef21",
                                            }

                                        })
                                        .then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.unfollow(u.id)
                                            }
                                            props.toggleInFollowingProgress(false);
                                        });
                                }}>Unfollow</button>
                                : <button disabled={props.toggleInProgress} onClick={() => {
                                    axios
                                        .post(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`, {}, {withCredentials: true})
                                        .then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.follow(u.id)
                                            }
                                        });
                                }}>Follow</button>
                            }
                        </div>
                    </span>
                        <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                    </div>
                )
            }
        </div>
    )
}

export default Users;