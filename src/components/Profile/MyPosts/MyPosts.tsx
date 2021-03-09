import React from "react";
import s from './style.module.scss';
import {Post} from "../../Post/Post";
import {postsType, stateType} from "../../../Redux/state";

type propsMyPostsType = { posts: Array<postsType> }

export const MyPosts:React.FC<propsMyPostsType> = (props) => {
    return (
        <div>
            <div>My posts</div>
            <div>New Post</div>
            <textarea className={s.textarea}/>
            <button className={s.btn}>Add</button>

            {
                props.posts.map((i: any) => <Post key={i.id} post={i.post} likesCount={i.likesCount}/>)
            }

        </div>
    )
}