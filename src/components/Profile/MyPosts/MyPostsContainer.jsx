import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


// const MyPostsContainer = (props) => {
//
//     let state = props.store.getState().profilePage;
//
//     let addPost = () => {
//         props.store.dispatch(addPostActionCreator());
//     }
//     let onPostChange = (text) => {
//         let action = updateNewPostTextActionCreator(text);
//         props.store.dispatch(action);
//     }
//
//     return (
//         <MyPosts updateNewPostText={onPostChange} addPost={addPost} newPostText={state.newPostText} postsElements={state.posts}/>
//     )
// }

let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        postsElements: state.profilePage.posts
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;