import profileReducer, {addPostActionCreator, deletePostActionCreator} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'I am learning React', likesCount: '15'},
        {id: 2, message: 'It is my first post', likesCount: '23'},
        {id: 3, message: 'Now a know mapping', likesCount: '40'},
        {id: 4, message: 'Cococo', likesCount: '2'},
        {id: 5, message: 'Ole Ole', likesCount: '5'},
    ]
};

it('new post should be added correctly', () => {
    let action = addPostActionCreator("Znak Nikita");
    let newState = profileReducer(state,action);

    expect(newState.posts.length).toBe(6)
    expect(newState.posts[5].message).toBe("Znak Nikita");

});

it('post should be deleted correctly', () => {
    let action = deletePostActionCreator(1);
    let newState = profileReducer(state,action);

    expect(newState.posts.length).toBe(4)
});

it('after deleting length shouldn\'t de decrement id id is incorrect', () => {
    let action = deletePostActionCreator(1000);
    let newState = profileReducer(state,action);

    expect(newState.posts.length).toBe(5)
});
