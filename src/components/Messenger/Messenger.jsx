import c from './Messenger.module.css'
import Chat from "./Chats/Chat";
import Message from "./Message/Message";
import React, { useEffect, useRef } from 'react'



function Messenger(props) {
    let chatsElement = props.chats.map(c => <Chat chatImg={c.chatImg} chatTitle={c.chatTitle} chatPreview={c.chatPreview} chatId={c.chatId} />)
    let messageElement = props.messages.map(c => <Message messageImg={c.messageImg} messageName={c.messageName} messageText={c.messageText} messageId={c.messageId} isMyMessage={c.isMyMessage} />)

    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(scrollToBottom, [props.messages]);


    return (
        <main className={c.messenger}>
            <div className={c.chats}>
            <div className={c.chatsWrapper}>
                    {chatsElement}
                </div>
            </div>
            <div className={c.messages}>
                <div className={c.messagesWrapper}>
                    {messageElement}
                </div>
                <div ref={messagesEndRef} />
            </div>
        </main>
    );
}

export default Messenger;
