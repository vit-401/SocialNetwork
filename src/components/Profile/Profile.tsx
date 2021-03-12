import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {postsType, profilePageType, stateType} from "../../Redux/state";

type propsProfileType = {
    profilePage: profilePageType
    addPost: () => void
    updateNewPostText: (x: string) => void
}

export const Profile: React.FC<propsProfileType> = (props) => {
    return <div>
        <ProfileInfo/>
        <MyPosts profilePage={props.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
    </div>;
}