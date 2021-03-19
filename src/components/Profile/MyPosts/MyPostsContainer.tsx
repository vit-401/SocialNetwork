import React, {LegacyRef} from "react";
import s from './style.module.scss';
import {Post} from "../../Post/Post";
import {addPostACFunc, postsType, profilePageType, stateType, updateNewPostTexttACFunc} from "../../../Redux/state";
import {MyPosts} from "./MyPosts";
import { StoreContext } from "../../../StoreContext";


export const MyPostsContainer: React.FC = () => {
    return (
        <StoreContext.Consumer>{
            (store:any) => {
                let state = store.getState().profilePage
                const addPosts = () => {
                    store.dispatch(addPostACFunc())
                }
                let updateNewPostText = (text: string) => {
                    store.dispatch(updateNewPostTexttACFunc(text))
                }
                return <MyPosts updateNewPostText={updateNewPostText} profilePage={state} addPosts={addPosts}/>
            }
        }

        </StoreContext.Consumer>
    )
}