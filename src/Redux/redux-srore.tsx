import {applyMiddleware, combineReducers, createStore} from "redux";
import {dialogsReducer, DialogStateType} from "./dialogs-reduser";
import {profileReducer, ProfileStateType} from "./profile-reduser";
import {authReducer, AuthStateType} from "./auth-reduser";
import usersReducer, {UsersStateType} from "./users-reduser";
import {reducer as formReducer} from 'redux-form'
import thunk from "redux-thunk";

export type AppStateType = {
    profilePage: ProfileStateType
    dialogsPage: DialogStateType
    usersPage: UsersStateType
    auth: AuthStateType
    form: ReturnType<typeof formReducer>

}

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
});
export let store = createStore(reducers, applyMiddleware(thunk))


