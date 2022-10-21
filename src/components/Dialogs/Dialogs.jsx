import React from "react";
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs
        .map((d, index) => <DialogItem name={d.name} id={d.id} img={d.img} key={index}/>)

    let messagesElements = props.state.messages
        .map((m, index) => <Message message={m.message} key={index}/>)

    let newMessageElement = React.createRef();

    let newMessage = () => {
        let text = newMessageElement.current.value;
        alert(text)

    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea ref={newMessageElement}></textarea>
                </div>
                <div>
                    <button onClick={newMessage}><h3>Sent message</h3></button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;