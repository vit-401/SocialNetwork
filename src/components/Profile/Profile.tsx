import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {postsType, profilePageType, stateType} from "../../Redux/state";

type propsProfileType = {
    profilePage: profilePageType
    dispatch: any
}

export const Profile: React.FC<propsProfileType> = (props) => {
    return <div>
        <ProfileInfo/>
        <MyPosts dispatch={props.dispatch} profilePage={props.profilePage}/>
    </div>;
}