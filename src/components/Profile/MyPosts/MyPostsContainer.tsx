import React from "react";

import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";
import {addPostACFunc, updateNewPostTexttACFunc} from "../../../Redux/profile-reduser";


let mapStateToProps = (state: any) => {
    return {
        profilePage: state.profilePage
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewPostText: (text: any) => {
            dispatch(updateNewPostTexttACFunc(text))
        },
        addPosts: () => {
            dispatch(addPostACFunc())
        },
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
