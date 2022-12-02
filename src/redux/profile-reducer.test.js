import profileReducer, {addPostActionCreator} from "./profile-reducer";

test('new post should be added', () => {
    let action = addPostActionCreator("Znak Nikita");

    let initialState = {
        posts: [
            {id: 1, message: 'I am learning React', likesCount: '15'},
            {id: 2, message: 'Its my first post', likesCount: '23'},
            {id: 3, message: 'Now a know mapping', likesCount: '40'},
            {id: 4, message: 'Cococo', likesCount: '2'},
            {id: 5, message: 'Ole Ole', likesCount: '5'},
        ]
    }

    let newState = profileReducer(initialState,action);

    expect(newState.posts.length).toBe(5)
    // expect(newState.posts[4].message).toBe("Znak Nikita");

});
