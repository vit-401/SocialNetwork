import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reduser";
import {profileReducer} from "./profile-reduser";
import {usersReducer} from "./users-reduser";
import {authReducer} from "./auth-reduser";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    userPage: usersReducer,
    auth: authReducer
});
export let store = createStore(reducers)


