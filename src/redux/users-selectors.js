import {createSelector} from "reselect";

const getUsersSelector = (state) => {
    return state.usersPage.users;
};

export const getUsers = createSelector(getUsersSelector,(users) => {
    return users.filter(u => true);
})

export const getPageSize = (state) => {
    return state.usersPage.pageSize
};

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
};

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
};

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
};

export const getToggleInFollowingProgress = (state) => {
    return state.usersPage.toggleInFollowingProgress;
};

export const getToggleInProgress = (state) => {
    return state.usersPage.toggleInProgress;
};

// export const countSomethingDifficult = () => {
//     debugger
//     //for...math...big arr
//     let count = 25;
//     return count;
// }
