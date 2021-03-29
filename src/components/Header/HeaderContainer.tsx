import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {setUserDataAC} from "../../Redux/auth-reduser";
import {authMe} from "../../API/api";

class HeaderContainer extends React.Component<any> {
    componentDidMount(): void {
        authMe().then(data => {
            debugger
            let {id, email, login} = data.data
            if (data.resultCode === 0) {
                this.props.setUserDataAC(id, email, login)
            }
        })
    }

    render() {
        // @ts-ignore
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
    setUserDataAC
})(HeaderContainer)
