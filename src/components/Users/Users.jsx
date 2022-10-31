import React from "react";
import s from './Users.module.css'

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    photoUrl: 'https://fun24.org/wp-content/uploads/2021/10/fun24.org-2021-10-30_20-41-32_611609.jpg',
                    followed: true,
                    fullName: 'Nikita Znak',
                    status: 'Now I am learning React & Redux',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoUrl: 'https://fun24.org/wp-content/uploads/2021/10/fun24.org-2021-10-30_20-41-19_880366.jpg',
                    followed: true,
                    fullName: 'Dmitry Nazaruk',
                    status: 'I get a job before February',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 3,
                    photoUrl: 'https://fun24.org/wp-content/uploads/2021/10/fun24.org-2021-10-30_20-41-24_066300.jpg',
                    followed: true,
                    fullName: 'Ulyana Nowak',
                    status: 'I am do not like cooking meet',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 4,
                    photoUrl: 'https://fun24.org/wp-content/uploads/2021/10/fun24.org-2021-10-30_20-41-25_959615.jpg',
                    followed: false,
                    fullName: 'Alexey Agievich',
                    status: 'I am pidor',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
            ]
        )
    }

    return (
        <div className={s.usersList}>
            {
                props.users.map((u, index) => <div key={index}>
                    <span>
                        <div>
                            <img src={u.photoUrl}/>
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
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;