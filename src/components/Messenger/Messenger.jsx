import c from './Messenger.module.css'
import Chat from "./Chats/Chat";

function Messenger() {
    return (
        <main className={c.messenger}>
            <div className={c.chats}>
                <Chat chatImg='https://sun7-9.userapi.com/NaDhheZgzqww8wt6JKAlUV2sHjRgo92UDLLNZg/v2y0jdIofS4.jpg' chatTitle='4135 без кураторов' chatPreview='Группа гэйэв' chatId='1'/>
                <Chat chatImg='https://sun7-6.userapi.com/s/v1/ig2/IjV3I1ercAAEW67q0CilZpUXTUzYjMAL-kMcT5lJ5PvbNknCjIpDRGLnNSEpQ0iQN-ROYi3qAFXgzo7mTr8B-DN7.jpg?size=50x0&quality=96&crop=169,0,809,809&ava=1' chatTitle='Айнур Каюмов' chatPreview='У меня есть отврётка' chatId='2'/>
                <Chat chatImg='https://sun7-9.userapi.com/DQmnSfi3fqY95GRDuNIWMKGOgFOgA5qp7lohgg/UHNZYwdALg8.jpg' chatTitle='Гарайшин Артур' chatPreview='Уважаемый человек' chatId='3'/>
                <Chat chatImg='https://sun7-8.userapi.com/s/v1/ig2/ZRn6JP6VynD9fyHgmI5WLMZZoCfcClDgXYz_P6Mw6ZfnMkKJfyNlodGOtcKuoGImymybd25xQMS-szUZp19lrKz5.jpg?size=50x0&quality=96&crop=0,182,718,718&ava=1' chatTitle='Местный Дурачок' chatPreview='#freeNavalny' chatId='4'/>

            </div>
            <div className={c.messages}>
            Select a chat or create a new one
            </div>
        </main>
    );
}

export default Messenger;
