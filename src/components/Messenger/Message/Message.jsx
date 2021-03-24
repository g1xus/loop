import c from './Message.module.css'

function Message(props) {
    return (
        <div className={c.message}>
            <div className={c.messageImgWrapper}>
                <img src={props.messageImg} alt="chat image" className={c.messageImg} />
            </div>
            <div className={c.messageInfo}>
                <div className={c.messageName}>{props.messageName}</div>
                <div className={c.messageText}>{props.messageText}</div>
            </div>
        </div>
    );
}

export default Message;
