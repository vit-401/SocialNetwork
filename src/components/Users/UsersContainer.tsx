import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {followAC, seteUsersAC, unfollowAC} from "../../Redux/users-reduser";

let mapStateToProps = (state: any) => {
    return {
        users: state.userPage.users
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userId: number) => dispatch(followAC(userId)),
        unFollow: (userId: number) => dispatch(unfollowAC(userId)),
        setUsers: (users: Array<any>) => dispatch(seteUsersAC(users))
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)