import React, {LegacyRef} from "react";
import s from './style.module.scss';
import {Post} from "../../Post/Post";
import {postsType, profilePageType} from "../../../Redux/state";

type propsMyPostsType = {
    profilePage: profilePageType
    dispatch: any

}

export const MyPosts: React.FC<propsMyPostsType> = (props) => {
    const newPostElement: LegacyRef<HTMLTextAreaElement> = React.createRef()
    const addPosts = () => {
        props.dispatch({type:'ADD-POST'})
        props.dispatch({type:'UPDATE-NEW-POST-TEXT', newText: ''})
    }
    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.dispatch({type:'UPDATE-NEW-POST-TEXT', newText: text})
        }
    }
    return (
        <div>
            <div>My posts</div>
            <div>New Post</div>
            <textarea className={s.textarea} ref={newPostElement} value={props.profilePage.newPostText}
                      onChange={onPostChange}/>
            <button className={s.btn} onClick={addPosts}>Add</button>

            {
                props.profilePage.posts.map((i: any) => <Post key={i.id} post={i.post} likesCount={i.likesCount}/>)
            }

        </div>
    )
}