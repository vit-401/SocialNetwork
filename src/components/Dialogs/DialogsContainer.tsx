import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {addNewMessageCreator, updateNewMessageCreator} from "../../Redux/dialogs-reduser";



let mapStateToProps = (state: any)=>{
    return{
        dialogsPage:state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: any)=>{
    return{
        addNewMessage:()=>{
            dispatch(addNewMessageCreator())
        },
        updateNewMessage:(text: any)=>{
            dispatch(updateNewMessageCreator(text))
        },
    }
}

export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);
