const ADD_POST = 'ADD-POST';
const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'I am learning React', likesCount: '15'},
                {id: 2, message: 'Its my first post', likesCount: '23'},
                {id: 3, message: 'Now a know mapping', likesCount: '40'},
                {id: 4, message: 'Cococo', likesCount: '2'},
                {id: 5, message: 'Ole Ole', likesCount: '5'},
            ],
            newPostText: 'Enter your text for post',
        },

        dialogsPage: {
            messages: [
                {id: 1, message: 'Lets go cs'},
                {id: 2, message: 'I want energy-drink'},
                {id: 3, message: 'Im eblan'},
                {id: 4, message: 'Check direct'},
            ],
            dialogs: [
                {
                    id: 1,
                    name: 'Dimazavr',
                    img: 'https://fun24.org/wp-content/uploads/2021/10/fun24.org-2021-10-30_20-41-19_880366.jpg'
                },
                {
                    id: 2,
                    name: 'Hahhah-kayo',
                    img: 'https://fun24.org/wp-content/uploads/2021/10/fun24.org-2021-10-30_20-41-24_066300.jpg'
                },
                {
                    id: 3,
                    name: 'Ecce-homora',
                    img: 'https://fun24.org/wp-content/uploads/2021/10/fun24.org-2021-10-30_20-41-25_959615.jpg'
                },
                {
                    id: 4,
                    name: 'Shotahappens',
                    img: 'https://fun24.org/wp-content/uploads/2021/10/fun24.org-2021-10-30_20-41-32_611609.jpg'
                },
            ],
            newMessageBody: ""
        },

        sidebar: {
            friends: [
                {
                    id: 1,
                    name: 'Dimazavr',
                    img: 'https://fun24.org/wp-content/uploads/2021/10/fun24.org-2021-10-30_20-41-19_880366.jpg'
                },
                {
                    id: 2,
                    name: 'Hahhah-kayo',
                    img: 'https://fun24.org/wp-content/uploads/2021/10/fun24.org-2021-10-30_20-41-24_066300.jpg'
                },
                {
                    id: 3,
                    name: 'Ecce-homora',
                    img: 'https://fun24.org/wp-content/uploads/2021/10/fun24.org-2021-10-30_20-41-25_959615.jpg'
                },
                {
                    id: 4,
                    name: 'Shotahappens',
                    img: 'https://fun24.org/wp-content/uploads/2021/10/fun24.org-2021-10-30_20-41-32_611609.jpg'
                },
            ]
        }
    },
    _callSubscriber() {
        console.log('state is changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; //наблюдатель (паттерн observer)
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: (this._state.profilePage.posts.length + 1),
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        }
        else if (action.type === SEND_MESSAGE) {;
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id: this._state.dialogsPage.messages.length + 1, message: body});
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyActionCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default store;