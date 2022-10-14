import React from "react";
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <img src={'https://wallpapercave.com/uwp/uwp753612.png'} alt={'description of image'}/>
            Post 1
            <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post;