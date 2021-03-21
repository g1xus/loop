import c from './Message.module.css'
import {NavLink} from "react-router-dom";

function Message(props) {
    return (
        <div className={c.messages}>
            Select a chat or create a new one
        </div>
    );
}

export default Message;
