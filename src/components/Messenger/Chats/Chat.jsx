import c from './Chat.module.css'
import { NavLink } from "react-router-dom";

function Chat(props) {
    return (
        <NavLink className={c.chat} to={`/messenger/${props.chatId}`}>
            <div className={c.chatImgWrapper}>
                <img src={props.chatImg} alt="chat image" className={c.chatImg} />
            </div>
            <div className={c.chatInfo}>
                <div className={c.chatTitle}>{props.chatTitle}</div>
                <div className={c.chatPreview}>{props.chatPreview}</div>
            </div>
        </NavLink>
    );
}

export default Chat;
