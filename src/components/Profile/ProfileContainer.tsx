import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import {getProfileThunkCreator} from "../../Redux/profile-reduser";


class ProfileContainer extends React.Component <any> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        debugger
        let userId = this.props.match.params.userId
        this.props.getProfileThunkCreator(userId)
    }

    render() {
        if(!this.props.isAuth){
            return <Redirect to={'/login'}/>
        }
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

let mapSateToProps = (state: any) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

let WithRouterContainerComponent = withRouter(ProfileContainer)
export default connect(mapSateToProps, {
    getProfileThunkCreator
})(WithRouterContainerComponent)

