import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reduser";
import {profileReducer} from "./profile-reduser";
import {authReducer} from "./auth-reduser";
import usersReducer from "./users-reduser";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
});
export let store = createStore(reducers)


