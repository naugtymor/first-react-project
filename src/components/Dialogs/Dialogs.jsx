import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
} //component

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
} //component

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
        .map(d => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = messages
        .map(m => <Message message={m.message}/>)

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