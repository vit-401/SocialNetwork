import React, {ReactNode} from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setUserDataAC} from "../../Redux/auth-reduser";

class HeaderContainer extends React.Component<any> {
    componentDidMount(): void {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(res => {
            debugger
            let {id, email, login} = res.data.data
            if (res.data.resultCode === 0) {
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
