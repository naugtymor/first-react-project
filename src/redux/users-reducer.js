const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
        // {id: 1, followed: true, fullName: 'Nikita Znak', status: 'Now I am learning React & Redux', locatiom: {city: 'Minsk', country: 'Belarus'}},
        // {id: 2, followed: true, fullName: 'Dmitry Nazaruk', status: 'I get a job before February', locatiom: {city: 'Minsk', country: 'Belarus'}},
        // {id: 3, followed: true, fullName: 'Ulyana Nowak', status: 'I am do not like cooking meet', locatiom: {city: 'Minsk', country: 'Belarus'}},
        // {id: 4, followed: false, fullName: 'Alexey Agievich', status: 'I am pidor', locatiom: {city: 'Minsk', country: 'Belarus'}},
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});


export default usersReducer();