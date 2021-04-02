import React from "react";
import {
    follow,
    getUsers,
    setCurrentPage,
    setUsers,
    toggleFollowingProgress,
    unfollow,
} from "../../Redux/users-reduser";
import {Users} from "./Users";
import {Preloader} from "../../common/preloader/Preloader";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

class UsersContainer extends React.Component<any> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount(): void {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }


    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state: any) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        setUsers,
        setCurrentPage,
        toggleFollowingProgress,
        getUsers,
        follow,
        unfollow
    }),
    withAuthRedirect)(UsersContainer)

