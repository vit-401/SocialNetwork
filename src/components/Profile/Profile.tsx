import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


export class Profile extends React.Component<any> {


    render() {
        return <div>
            <ProfileInfo updateStatus={this.props.updateStatusTC} status={this.props.status}
                         profile={this.props.profile}/>
            <MyPostsContainer/>
        </div>;
    }
}
