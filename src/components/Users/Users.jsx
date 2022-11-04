import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";

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
                {slicedPages.map(p => <span className={props.currentPage === p && s.selectedPage}
                                            onClick={() => {
                                                props.onPageChange(p)
                                            }}>{p + " "}</span>)}
                ...
            </div>
            {
                props.users.map((u, index) => <div key={index}>
                    <span>
                        <div>
                            <img className={s.userImg} src={u.photos.small != null ? u.photos.small : userPhoto}
                                 alt={'description'}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
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