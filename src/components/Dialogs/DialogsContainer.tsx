import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {addNewMessageCreator} from "../../Redux/dialogs-reduser";


let mapStateToProps = (state: any) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        addNewMessage: (value: string) => {
            dispatch(addNewMessageCreator(value))
        }

    }
}



export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)(Dialogs)

