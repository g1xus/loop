const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (newText) =>
  ({ type: UPDATE_NEW_POST_TEXT, newText })

let initialState = {
    posts: [
        { postText: 'Привет', postImg: 'https://clck.ru/TmX9a', postId: '1' },
        { postText: 'Hello', postImg: 'https://clck.ru/TmXQo', postId: '2' },
      ],
      newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                postText: state.newPostText,
                postImg: 'https://clck.ru/TmXKJ',
                postId: '5'
            }
            state.posts.push(newPost);
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state

    }

    return state
}

export default profileReducer