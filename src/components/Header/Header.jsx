import React from "react";
import s from './Header.module.scss';
import {NavLink} from "react-router-dom";
import {BiLogIn, BiLogOut} from "react-icons/bi";


const Header = (props) => {
    return (
        <div className={s.header}>
            <div className={s.mainBlock}>
                <p className={s.rotateBlock}>
                    {props.isAuth
                        ? <div className={s.loginBlock}>
                            <div className={s.iconOut} onClick={props.logout}><BiLogOut/></div>
                            <div className={s.userName}>{props.login}</div>
                        </div>
                        : <NavLink to={'/login'} className={s.loginBlock}>
                            <div className={s.iconIn}><BiLogIn/></div>
                        </NavLink>
                    }
                </p>
            </div>
        </div>
    )
}

export default Header;