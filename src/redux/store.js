import profileReducer from './profile-reducer'
import messengerReducer from './messenger-reducer'


let store = {
  _state: {
    messengerPage: {
      chats: [
        { chatId: 1, chatTitle: '4135 без кураторов', chatImg: 'https://clck.ru/TmUJk', chatPreview: 'Группа гэйэв', id: '1' },
        { chatId: 2, chatTitle: 'Айнур Каюмов', chatImg: 'https://clck.ru/TmUKb', chatPreview: 'У меня есть отврётка', id: '2' },
        { chatId: 3, chatTitle: 'Гарайшин Артур', chatImg: 'https://clck.ru/TmUKo', chatPreview: 'Уважаемый человек', id: '3' },
        { chatId: 4, chatTitle: 'Местный Дурачок', chatImg: 'https://clck.ru/TmULC', chatPreview: '#freeNavalny', id: '4' }
      ],
      messages: [
        { messageImg: 'https://clck.ru/TtPr6', messageName: 'Айдана Нуруллина', messageText: 'Как дела?', messageId: '1' },
        { messageImg: 'https://clck.ru/TtRLc', messageName: 'Радмир Газизов', messageText: 'Хорошо у тебя как?', messageId: '2' },
        { messageImg: 'https://clck.ru/TtPr6', messageName: 'Айдана Нуруллина', messageText: 'Тоже хорошо', messageId: '3' },
        { messageImg: 'https://clck.ru/TtRLc', messageName: 'Радмир Газизов', messageText: 'Пока', messageId: '4' }
      ],
      newMessageText: ''
    },
    profilePage: {
      posts: [
        { postText: 'Привет', postImg: 'https://clck.ru/TmX9a', postId: '1' },
        { postText: 'Hello', postImg: 'https://clck.ru/TmXQo', postId: '2' },
      ],
      newPostText: ''
    }
  },
  _rerenderEntireTree() {
    console.log('State was changed')
  },
  getState() {
    return this._state
  },
  subscribe(observer) {
    this._rerenderEntireTree = observer
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.messengerPage = messengerReducer(this._state.messengerPage, action)
    this._rerenderEntireTree(this._state)
  }
}



export default store;