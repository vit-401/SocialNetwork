import React from "react";
import ReactDOM from "react-dom";
import {state, subscribe} from "./Redux/state";
import App from "./App";
import {addPost, updateNewPostText} from "./Redux/state";
import './normalize.css'
import './index.css';



export let rerenderEntireTree = (state: any) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree(state)
subscribe(rerenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
