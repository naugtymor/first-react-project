import {usersAPI} from "../api/api";
import {followSuccess, toggleInFollowingProgress} from "./users-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'I am learning React', likesCount: '15'},
        {id: 2, message: 'Its my first post', likesCount: '23'},
        {id: 3, message: 'Now a know mapping', likesCount: '40'},
        {id: 4, message: 'Cococo', likesCount: '2'},
        {id: 5, message: 'Ole Ole', likesCount: '5'},
    ],
    newPostText: '',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: (state.posts.length + 1),
                message: state.newPostText,
                likesCount: 0,
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText,
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            };
        default:
            return state;
    }
}

//action-creators
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

//thunk-creators
export const getUserProfile = (userId) => {
    return (dispatch) => {
        // let userId  = this.props.router.params.userId;
// if (!userId) {
//     userId = 2;
// }
        usersAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
            });
    }
}


export default profileReducer;