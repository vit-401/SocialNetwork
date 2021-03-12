import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {addPost, updateNewPostText} from "./Redux/state";

export let rerenderEntireTree = (state: any) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}