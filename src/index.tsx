import React from "react";
import ReactDOM from "react-dom";
// import {store} from "./Redux/state";
import App from "./App";
import './normalize.css'
import './index.css';
import {store} from "./Redux/redux-srore";
import {StoreContext} from "./StoreContext";



export let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <StoreContext.Provider value={store}>
            <App store={store} />
            </StoreContext.Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
store.subscribe(rerenderEntireTree)
rerenderEntireTree()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
