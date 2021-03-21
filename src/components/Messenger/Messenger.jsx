import c from './Messenger.module.css'
import Chat from "./Chats/Chat";

let chats = [
    { chatId: 1, chatTitle: '4135 без кураторов', chatImg: 'https://clck.ru/TmUJk', chatPreview: 'Группа гэйэв' },
    { chatId: 2, chatTitle: 'Айнур Каюмов', chatImg: 'https://clck.ru/TmUKb', chatPreview: 'У меня есть отврётка' },
    { chatId: 3, chatTitle: 'Гарайшин Артур', chatImg: 'https://clck.ru/TmUKo', chatPreview: 'Уважаемый человек' },
    { chatId: 4, chatTitle: 'Местный Дурачок', chatImg: 'https://clck.ru/TmULC', chatPreview: '#freeNavalny' },
    { chatId: 4, chatTitle: 'Местный Дурачок', chatImg: 'https://clck.ru/TmULC', chatPreview: '#freeNavalny' },
    { chatId: 4, chatTitle: 'Местный Дурачок', chatImg: 'https://clck.ru/TmULC', chatPreview: '#freeNavalny' }
]

let chatsElement = chats.map(c => <Chat chatImg={c.chatImg} chatTitle={c.chatTitle} chatPreview={c.chatPreview} chatId={c.chatId} />)

function Messenger() {
    return (
        <main className={c.messenger}>
            <div className={c.chats}>
                { chatsElement }
            </div>
            <div className={c.messages}>
                Select a chat or create a new one
            </div>
        </main>
    );
}

export default Messenger;
