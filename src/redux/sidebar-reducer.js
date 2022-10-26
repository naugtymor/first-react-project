let initialState = {
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

const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer;
