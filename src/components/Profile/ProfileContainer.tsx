import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getProfileThunkCreator, getStatusTC, updateStatusTC} from "../../Redux/profile-reduser";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";



class ProfileContainer extends React.Component <any> {


    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.getProfileThunkCreator(userId)
        this.props.getStatusTC(userId)
    }


    render() {
        return <Profile {...this.props}status={this.props.status} profile={this.props.profile}/>
    }
}


let mapStateToProps = (state: any) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getProfileThunkCreator,
        getStatusTC,
        updateStatusTC
    }),
    withRouter,
    withAuthRedirect)(ProfileContainer)

