import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button><h3>Add post</h3></button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message={"Hi, how are you?"} likesValue={'15'}/>
                <Post message={"It's my first post"} likesValue={'20'}/>
            </div>
        </div>
    )
}

export default MyPosts;