import React from "react";
import {connect} from "react-redux";
import {
    followAC,
    isFetchingAC,
    seteCurrentAC,
    seteTotalUsersCountAC,
    seteUsersAC,
    unfollowAC
} from "../../Redux/users-reduser";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../../common/preloader/Preloader";

class UsersContainer extends React.Component<any> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount(): void {
        this.props.setIsFetch(true)
        axios(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            withCredentials: true,
        }).then(res => {
            this.props.setIsFetch(false)
            this.props.setTotalUsersCount(res.data.totalCount)
            this.props.setUsers(res.data.items)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setIsFetch(true)
        axios(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
            withCredentials: true,
        }).then(res => {
            this.props.setIsFetch(false)
            this.props.setUsers(res.data.items)

        })
    }


    render() {

        return <>
            {
                this.props.isFetching
                    ? <Preloader/>
                    : <Users totalUsersCount={this.props.totalUsersCount}
                             onPageChanged={this.onPageChanged}
                             pageSize={this.props.pageSize}
                             currentPage={this.props.currentPage}
                             unFollow={this.props.unFollow}
                             follow={this.props.follow}
                             users={this.props.users
                             }
                    />
            }
        </>
    }
}

let mapStateToProps = (state: any) => {
    return {
        users: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalUsersCount: state.userPage.totalUsersCount,
        currentPage: state.userPage.currentPage,
        isFetching: state.userPage.isFetching
    }
}

export default connect(mapStateToProps, {
    follow: followAC,
    unFollow: unfollowAC,
    setUsers: seteUsersAC,
    setCurrentPage: seteCurrentAC,
    setTotalUsersCount: seteTotalUsersCountAC,
    setIsFetch: isFetchingAC
})(UsersContainer)