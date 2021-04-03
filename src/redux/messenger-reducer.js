const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const updateNewMessageTextActionCreator = (newText) =>
  ({ type: UPDATE_NEW_MESSAGE_TEXT, newText })

const messengerReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                messageImg: 'https://clck.ru/TtRLc',
                messageName: 'Радмир Газизов',
                messageText: state.newMessageText,
                messageId: '5'
            }
            state.messages.push(newMessage);
            state.newMessageText = ''
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText
            return state
        default:
            return state
    }

    return state
}

export default messengerReducer