const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: state.messages.length + 1, message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageActionCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;