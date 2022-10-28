import React from "react";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// const DialogsContainer = (props) => {
//
//     let state = props.store.getState();
//
//     let onSendMessageClick = () => {
//         props.store.dispatch(sendMessageActionCreator())
//     }
//     let onNewMessageChange = (body) => {
//         props.store.dispatch(updateNewMessageBodyActionCreator(body));
//     }
//
//     return (
//         <Dialogs sendMessage={onSendMessageClick} updateNewMessageBody={onNewMessageChange} dialogsPage={state.dialogsPage}/>
//     )
// }

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyActionCreator(body));
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;