import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";

const MyPosts = (props) => {

    let postsElements = props.posts
        .map((p, index) => <Post message={p.message} likesCount={p.likesCount} key={index}/>);
    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}><h3>Add post</h3></button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;