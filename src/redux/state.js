let store = {
  _state: {
    messengerPage: {
      chats: [
        { chatId: 1, chatTitle: '4135 без кураторов', chatImg: 'https://clck.ru/TmUJk', chatPreview: 'Группа гэйэв', id: '1' },
        { chatId: 2, chatTitle: 'Айнур Каюмов', chatImg: 'https://clck.ru/TmUKb', chatPreview: 'У меня есть отврётка', id: '2' },
        { chatId: 3, chatTitle: 'Гарайшин Артур', chatImg: 'https://clck.ru/TmUKo', chatPreview: 'Уважаемый человек', id: '3' },
        { chatId: 4, chatTitle: 'Местный Дурачок', chatImg: 'https://clck.ru/TmULC', chatPreview: '#freeNavalny', id: '4' }],
      messages: [
        { messageImg: 'https://clck.ru/TtPr6', messageName: 'Айдана Нуруллина', messageText: 'Как дела?', messageId: '1' },
        { messageImg: 'https://clck.ru/TtRLc', messageName: 'Радмир Газизов', messageText: 'Хорошо у тебя как?', messageId: '2' },
        { messageImg: 'https://clck.ru/TtPr6', messageName: 'Айдана Нуруллина', messageText: 'Тоже хорошо', messageId: '3' },
        { messageImg: 'https://clck.ru/TtRLc', messageName: 'Радмир Газизов', messageText: 'Пока', messageId: '4' },
        { messageImg: 'https://clck.ru/TtRLc', messageName: 'Радмир Газизов', messageText: 'Пока', messageId: '4' },
        { messageImg: 'https://clck.ru/TtRLc', messageName: 'Радмир Газизов', messageText: 'Пока', messageId: '4' },
        { messageImg: 'https://clck.ru/TtRLc', messageName: 'Радмир Газизов', messageText: 'Пока', messageId: '4' },
        { messageImg: 'https://clck.ru/TtRLc', messageName: 'Радмир Газизов', messageText: 'Пока', messageId: '4' },
        { messageImg: 'https://clck.ru/TtRLc', messageName: 'Радмир Газизов', messageText: 'Пока', messageId: '4' },
        { messageImg: 'https://clck.ru/TtRLc', messageName: 'Радмир Газизов', messageText: 'Пока', messageId: '4' },
        { messageImg: 'https://clck.ru/TtRLc', messageName: 'Радмир Газизов', messageText: 'Пока', messageId: '4' },
        { messageImg: 'https://clck.ru/TtRLc', messageName: 'Радмир Газизов', messageText: 'Пока', messageId: '4' },
        { messageImg: 'https://clck.ru/TtRLc', messageName: 'Радмир Газизов', messageText: 'Пока', messageId: '4' },
        { messageImg: 'https://clck.ru/TtRLc', messageName: 'Радмир Газизов', messageText: 'Пока', messageId: '4' },
        { messageImg: 'https://clck.ru/TtRLc', messageName: 'Радмир Газизов', messageText: 'Пока', messageId: '4' },
        { messageImg: 'https://clck.ru/TtRLc', messageName: 'Радмир Газизов', messageText: 'Пока', messageId: '4' },
        { messageImg: 'https://clck.ru/TtRLc', messageName: 'Радмир Газизов', messageText: 'Пока', messageId: '4' },
        { messageImg: 'https://clck.ru/TtRLc', messageName: 'Радмир Газизов', messageText: 'Пока', messageId: '4' },
        { messageImg: 'https://clck.ru/TtRLc', messageName: 'Радмир Газизов', messageText: 'Пока', messageId: '4' },
        { messageImg: 'https://clck.ru/TtRLc', messageName: 'Радмир Газизов', messageText: 'Пока', messageId: '4' },
        { messageImg: 'https://clck.ru/TtRLc', messageName: 'Радмир Газизов', messageText: 'Пока', messageId: '4' },
        { messageImg: 'https://clck.ru/TtRLc', messageName: 'Радмир Газизов', messageText: 'Пока', messageId: '4' },
        { messageImg: 'https://clck.ru/TtRLc', messageName: 'Радмир Газизов', messageText: 'Пока', messageId: '4' },
        { messageImg: 'https://clck.ru/TtRLc', messageName: 'Радмир Газизов', messageText: 'Пока', messageId: '4' },
        { messageImg: 'https://clck.ru/TtRLc', messageName: 'Радмир Газизов', messageText: 'Пока', messageId: '4' }
      ],
      newMessageText: ''
    },
    profilePage: {
      posts: [
        { postText: 'I am gay', postImg: 'https://clck.ru/TmX9a', postId: '1' },
        { postText: 'I am not gay', postImg: 'https://clck.ru/TmXQo', postId: '2' },
        { postText: 'I am bisexual', postImg: 'https://clck.ru/TmXKJ', postId: '5' },
        { postText: 'I am bisexual', postImg: 'https://clck.ru/TmXKJ', postId: '6' }
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
    if (action.type === 'ADD-POST') {
      let newPost = {
        postText: this._state.profilePage.newPostText,
        postImg: 'https://clck.ru/TmXKJ',
        postId: '5'
      }
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = ''
      this._rerenderEntireTree(this._state)
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText
    this._rerenderEntireTree(this._state)
    } else if (action.type === 'ADD-MESSAGE') {
      let newMessage = {
        messageImg: 'https://clck.ru/TtRLc',
        messageName: 'Радмир Газизов',
        messageText: this._state.messengerPage.newMessageText,
        messageId: '5'
      }
      this._state.messengerPage.messages.push(newMessage);
      this._state.messengerPage.newMessageText = ''
      this._rerenderEntireTree(this._state)
    } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT'){
      this._state.messengerPage.newMessageText = action.newText
    this._rerenderEntireTree(this._state)
    }
  }
}

export default store;