import React from "react";
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Dimazavr'},
        {id: 2, name: 'Hahhah-kayo'},
        {id: 3, name: 'Ecce-homora'},
        {id: 4, name: 'Shotahappens'},
    ]

    let messages = [
        {id: 1, message: 'Lets go cs'},
        {id: 2, message: 'I want energy-drink'},
        {id: 3, message: 'Im eblan'},
        {id: 4, message: 'Check direct'},
    ]

    let dialogsElements = dialogs
        .map((d, index) => <DialogItem name={d.name} id={d.id} key={index}/>)

    let messagesElements = messages
        .map((m, index) => <Message message={m.message} key={index}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;