import profileReducer, {addPostActionCreator} from "./profile-reducer";

it('new post should be added correctly', () => {
    let action = addPostActionCreator("Znak Nikita");

    let state = {
        posts: [
            {id: 1, message: 'I am learning React', likesCount: '15'},
            {id: 2, message: 'It is my first post', likesCount: '23'},
            {id: 3, message: 'Now a know mapping', likesCount: '40'},
            {id: 4, message: 'Cococo', likesCount: '2'},
            {id: 5, message: 'Ole Ole', likesCount: '5'},
        ]
    };

    let newState = profileReducer(state,action);

    expect(newState.posts.length).toBe(6)
    expect(newState.posts[5].message).toBe("Znak Nikita");

});
