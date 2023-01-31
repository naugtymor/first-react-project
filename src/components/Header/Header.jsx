import React from "react";
import s from './Header.module.scss';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <div className={s.header}>
            <div className={s.loginBlock}>
                <p className={s.xxx}>
                    {props.isAuth
                        ? <div className={s.userName}>{props.login} - <button onClick={props.logout}>Log out</button></div>
                        : <NavLink to={'/login'}>Login</NavLink>
                    }
                </p>
            </div>
        </div>
    )
}

export default Header;