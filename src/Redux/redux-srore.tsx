import {applyMiddleware, combineReducers, createStore} from "redux";
import {dialogsReducer, DialogStateType} from "./dialogs-reduser";
import {profileReducer, ProfileStateType} from "./profile-reduser";
import {authReducer, AuthStateType} from "./auth-reduser";
import usersReducer, {UsersStateType} from "./users-reduser";
import thunk from "redux-thunk";
export type AppStateType = {
    profilePage: ProfileStateType
    dialogsPage: DialogStateType
    usersPage: UsersStateType
    auth: AuthStateType
}

let reducers= combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
});
export let store = createStore(reducers,applyMiddleware(thunk))


