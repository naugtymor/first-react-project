import React from "react";
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Twitch_Glitch_Logo_Purple.svg/1756px-Twitch_Glitch_Logo_Purple.svg.png' alt={'description of image'}/>
        </header>
    )
}

export default Header;