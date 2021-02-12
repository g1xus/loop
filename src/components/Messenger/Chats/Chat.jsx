import c from './Chat.module.css'

function Chat(props) {
    return (
        <div className={c.chat}>
            <img src={props.chatImg} alt="chat image" className={c.chatImg}/>
            <div className={c.chatInfo}>
                <div className={c.chatTitle}>{props.chatTitle}</div>
                <div className={c.chatPreview}>{props.chatPreview}</div>
            </div>
        </div>
    );
}

export default Chat;
