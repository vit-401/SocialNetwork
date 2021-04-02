import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import { withRouter} from "react-router-dom";
import {getProfileThunkCreator} from "../../Redux/profile-reduser";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";


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
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)


let mapSateToProps = (state: any) => {
    return {
        profile: state.profilePage.profile,
    }
}

let WithRouterContainerComponent = withRouter(AuthRedirectComponent)
export default connect(mapSateToProps, {
    getProfileThunkCreator
})(WithRouterContainerComponent)

