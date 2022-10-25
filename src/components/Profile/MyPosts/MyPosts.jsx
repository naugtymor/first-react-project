import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {

    let state = props.store.getState().profilePage;

    let newPostText = state.newPostText;
    let postsElements = state.posts
        .map((p, index) => <Post message={p.message} likesCount={p.likesCount} key={index}/>);
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }
    let onPostChange = (e) => {
        let text = e.target.value;
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }

    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={newPostText} placeholder={'Enter your text'}/>
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