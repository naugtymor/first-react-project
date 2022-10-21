import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'I am learning React', likesCount: '15'},
            {id: 2, message: 'Its my first post', likesCount: '23'},
            {id: 3, message: 'Now a know mapping', likesCount: '40'},
            {id: 4, message: 'Cococo', likesCount: '2'},
            {id: 5, message: 'Ole Ole', likesCount: '5'},
        ],
        newPostText: 'Enter your text fot post',
    },

    dialogsPage: {
        messages: [
            {id: 1, message: 'Lets go cs'},
            {id: 2, message: 'I want energy-drink'},
            {id: 3, message: 'Im eblan'},
            {id: 4, message: 'Check direct'},
        ],
        dialogs: [
            {id: 1, name: 'Dimazavr', img: 'https://fun24.org/wp-content/uploads/2021/10/fun24.org-2021-10-30_20-41-19_880366.jpg'},
            {id: 2, name: 'Hahhah-kayo', img: 'https://fun24.org/wp-content/uploads/2021/10/fun24.org-2021-10-30_20-41-24_066300.jpg'},
            {id: 3, name: 'Ecce-homora', img: 'https://fun24.org/wp-content/uploads/2021/10/fun24.org-2021-10-30_20-41-25_959615.jpg'},
            {id: 4, name: 'Shotahappens', img: 'https://fun24.org/wp-content/uploads/2021/10/fun24.org-2021-10-30_20-41-32_611609.jpg'},
        ],
    },

    sidebar: {
        friends: [
            {id: 1, name: 'Dimazavr', img: 'https://fun24.org/wp-content/uploads/2021/10/fun24.org-2021-10-30_20-41-19_880366.jpg'},
            {id: 2, name: 'Hahhah-kayo', img: 'https://fun24.org/wp-content/uploads/2021/10/fun24.org-2021-10-30_20-41-24_066300.jpg'},
            {id: 3, name: 'Ecce-homora', img: 'https://fun24.org/wp-content/uploads/2021/10/fun24.org-2021-10-30_20-41-25_959615.jpg'},
            {id: 4, name: 'Shotahappens', img: 'https://fun24.org/wp-content/uploads/2021/10/fun24.org-2021-10-30_20-41-32_611609.jpg'},
        ]
    }
}

export let addPost = () => {
    let newPost = {
        id: (state.profilePage.posts.length + 1),
        message: state.profilePage.newPostText,
        likesCount: 0,
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;