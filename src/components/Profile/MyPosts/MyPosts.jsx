import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.postsElements
        .map((p, index) => <Post message={p.message} likesCount={p.likesCount} key={index}/>);
    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText} placeholder={'Enter your text'}/>
                </div>
                <div>
                    <button onClick={onAddPost}><h3>Add post</h3></button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;