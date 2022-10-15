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

    let dialogsData = [
        {id: 1, name: 'Dimazavr'},
        {id: 2, name: 'Hahhah-kayo'},
        {id: 3, name: 'Ecce-homora'},
        {id: 4, name: 'Shotahappens'},
    ]

    let messagesData = [
        {id: 1, message: 'Lets go cs'},
        {id: 2, message: 'I want energy-drink'},
        {id: 3, message: 'Im eblan'},
        {id: 4, message: 'Check direct'},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
            </div>
        </div>
    )
}

export default Dialogs;