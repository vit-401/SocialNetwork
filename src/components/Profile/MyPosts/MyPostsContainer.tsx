import React from "react";

import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";
import {addPostACFunc} from "../../../Redux/profile-reduser";

let mapStateToProps = (state: any) => {
    return {
        profilePage: state.profilePage
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {

        addPosts: (value: string) => {
            dispatch(addPostACFunc(value))
        },
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
