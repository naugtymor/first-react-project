import {profileAPI, usersAPI} from "../api/api";
import {followSuccess, toggleInFollowingProgress} from "./users-reducer";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SET_PHOTO = 'SET_PHOTO';

let initialState = {
    posts: [
        {id: 1, message: 'I am learning React', likesCount: '15'},
        {id: 2, message: 'Its my first post', likesCount: '23'},
        {id: 3, message: 'Now a know mapping', likesCount: '40'},
        {id: 4, message: 'Cococo', likesCount: '2'},
        {id: 5, message: 'Ole Ole', likesCount: '5'},
    ],
    profile: null,
    status: '',
    photo: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: (state.posts.length + 1),
                message: action.newPostText,
                likesCount: 0,
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.id),
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SET_PHOTO:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        default:
            return state;
    }
}

//action-creators
export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const deletePostActionCreator = (postId) => ({type: DELETE_POST, id: postId})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const savePhotoSuccess = (photos) => ({type: SET_PHOTO, photos});

//thunk-creators
export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data));
}
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));
}
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}
export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}
export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    let response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    }
    else {
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}));
        return Promise.reject(response.data.messages[0]);
        // dispatch(stopSubmit("edit-profile", {"contacts": {"facebook" : response.data.messages[0]}})) //разобрать ошибку на кадое зачение (коммент 97 урок)
    }
}


export default profileReducer;