import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {authMeThunkCreator} from "../../Redux/auth-reduser";

class HeaderContainer extends React.Component<any> {
    componentDidMount(): void {
        this.props.authMeThunkCreator()
    }
    render() {
        return <Header{...this.props}/>
    }
}

const mapStateToProps = (state: any) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}
export default connect(mapStateToProps, {
    authMeThunkCreator
})(HeaderContainer)
