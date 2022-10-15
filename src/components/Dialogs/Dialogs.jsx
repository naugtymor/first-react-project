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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={'Dimazavr'} id={'1'}/>
                <DialogItem name={'Hahhah_kayo'} id={'2'}/>
                <DialogItem name={'Ecce_homora'} id={'3'}/>
            </div>
            <div className={s.messages}>
                <Message message={'Hi'}/>
                <Message message={'How are you?'}/>
                <Message message={'Yo'}/>
            </div>
        </div>
    )
}

export default Dialogs;