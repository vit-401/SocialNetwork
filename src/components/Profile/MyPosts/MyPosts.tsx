import React, {LegacyRef} from "react";
import {Post} from "../../Post/Post";
import AddPostForm from "./AddPostForm";

type propsMyPostsType = {
    profilePage: any
    addPosts: any

}

export const MyPosts: React.FC<any> = (props) => {
    const newPostElement: LegacyRef<HTMLTextAreaElement> = React.createRef()
    const onAddPost = (value:string) => {
        props.addPosts(value)
    }

    const submit: any = (values: any) => {
        console.log(values.post)
        onAddPost(values.post)
    }
    return (
        <>
            <AddPostForm onSubmit={submit}/>

            {
                props.profilePage.posts.map((i: any) => <Post key={i.id} post={i.post} likesCount={i.likesCount}/>)
            }
        </>
    )
}