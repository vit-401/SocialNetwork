import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setProfileACFunc} from "../../Redux/profile-reduser";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component <any> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 1000
        }
        axios(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(res => {
                debugger
                this.props.setUserProfile(res.data)
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

