import c from './Messenger.module.css'
import Chat from "./Chats/Chat";
import Message from "./Message/Message";
import React, { useEffect } from 'react'
import addMessageImg from './addMessage.svg'
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/messenger-reducer'



function Messenger(props) {
    let chatsElement = props.chats.map(c => <Chat chatImg={c.chatImg} chatTitle={c.chatTitle} chatPreview={c.chatPreview} chatId={c.chatId} />)
    let messagesElement = props.messages.map(c => <Message messageImg={c.messageImg} messageName={c.messageName} messageText={c.messageText} messageId={c.messageId} isMyMessage={c.isMyMessage} />)

    let addMessage = () => {
        props.dispatch(addMessageActionCreator())
        messagesScrollToBottom()
    }

    let onMessageChange = () => {
        let newText = newMessageElement.current.value
        props.dispatch(updateNewMessageTextActionCreator(newText))
    }
    let messagesScrollToBottom = () => {
        messagesEnd.current.scrollIntoView({ behavior: 'smooth' })
    }
    useEffect(messagesScrollToBottom)
    let messagesEnd = React.createRef()
    let newMessageElement = React.createRef();
    return (
        <main className={c.messenger}>
            <div className={c.chats}>
                <div className={c.chatsScroll}>
                    {chatsElement}
                </div>
            </div>
            <div className={c.messages}>
                <div className={c.messagesScroll}>
                    {messagesElement}
                    <div ref={messagesEnd}/>
                </div>
            </div>
            <div/>
            <div className={c.addMessage}>
                <textarea ref={newMessageElement} onChange={onMessageChange} value={props.newMessageText} className={c.addMessageTextarea}/>
                <button onClick={addMessage} className={c.addMessageButton}><img src={addMessageImg} alt="Send message"/></button>
            </div>
        </main>
    );
}
export default Messenger;
