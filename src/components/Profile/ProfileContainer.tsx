import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {setProfileACFunc} from "../../Redux/profile-reduser";
import {withRouter} from "react-router-dom";
import {getProfile} from "../../API/api";


class ProfileContainer extends React.Component <any> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 1000
        }
        getProfile(userId)
            .then(data => {
                debugger
                this.props.setUserProfile(data)
            })
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

let mapSateToProps = (state: any) => {
    debugger
    return {
        profile: state.profilePage.profile
    }
}

let WithRouterContainerComponent = withRouter(ProfileContainer)
export default connect(mapSateToProps, {
    setUserProfile: setProfileACFunc
})(WithRouterContainerComponent)

