const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextActionCreator = (newText) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText,
});

let initialState = {
  chats: [
    {
      chatId: 1,
      chatTitle: "4135 без кураторов",
      chatImg: "https://clck.ru/TmUJk",
      chatPreview: "Группа гэйэв",
      id: "1",
    },
    {
      chatId: 2,
      chatTitle: "Айнур Каюмов",
      chatImg: "https://clck.ru/TmUKb",
      chatPreview: "У меня есть отврётка",
      id: "2",
    },
    {
      chatId: 3,
      chatTitle: "Гарайшин Артур",
      chatImg: "https://clck.ru/TmUKo",
      chatPreview: "Уважаемый человек",
      id: "3",
    },
    {
      chatId: 4,
      chatTitle: "Местный Дурачок",
      chatImg: "https://clck.ru/TmULC",
      chatPreview: "#freeNavalny",
      id: "4",
    },
  ],
  messages: [
    {
      messageImg: "https://clck.ru/TtPr6",
      messageName: "Айдана Нуруллина",
      messageText: "Как дела?",
      messageId: "1",
    },
    {
      messageImg: "https://clck.ru/TtRLc",
      messageName: "Радмир Газизов",
      messageText: "Хорошо у тебя как?",
      messageId: "2",
    },
    {
      messageImg: "https://clck.ru/TtPr6",
      messageName: "Айдана Нуруллина",
      messageText: "Тоже хорошо",
      messageId: "3",
    },
    {
      messageImg: "https://clck.ru/TtRLc",
      messageName: "Радмир Газизов",
      messageText: "Пока",
      messageId: "4",
    }
  ],
  newMessageText: "",
};

const messengerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        messageImg: "https://clck.ru/TtRLc",
        messageName: "Радмир Газизов",
        messageText: state.newMessageText,
        messageId: "5",
      };
      state.messages.push(newMessage);
      state.newMessageText = "";
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      return state;
    default:
      return state;
  }

  return state;
};

export default messengerReducer;
