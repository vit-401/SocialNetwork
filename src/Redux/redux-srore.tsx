import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reduser";
import {profileReducer} from "./profile-reduser";
import {usersReducer} from "./users-reduser";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    userPage: usersReducer
});
export let store = createStore(reducers)


