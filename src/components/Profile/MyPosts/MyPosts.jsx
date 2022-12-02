import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import AddMessageReduxForm from "./Post/AddMessageReduxForm";

const MyPosts = React.memo((props) => {

    let postsElements = props.postsElements
        .map((p) => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>);

    let addNewPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h2>Posts</h2>
            <AddMessageReduxForm onSubmit={addNewPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
})

export default MyPosts;