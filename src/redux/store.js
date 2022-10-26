import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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
            newPostText: '',
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
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state);
    }
}





export default store;