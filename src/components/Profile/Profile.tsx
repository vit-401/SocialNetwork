import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {postsType, stateType} from "../../Redux/state";

type propsProfileType = { posts: Array<postsType> }

export const Profile:React.FC<propsProfileType> = (props) => {
    return <div>
        <ProfileInfo/>
        <MyPosts posts={props.posts}/>
    </div>;
}