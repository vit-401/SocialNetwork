import React from 'react';
import './App.scss';
import {Navbar} from "./components/Navbar/Navbar";
import {Header} from "./components/Header/Header";
import Dialogs from "./components/Dialogs/Dialogs";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route} from 'react-router-dom';
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {dialogsType, stateType, updateNewPostText} from "./Redux/state";

type propsAppType = {
    state: stateType
    addPost: () => void
    updateNewPostText: (x: string) => void
}

const App: React.FC<propsAppType> = (props) => {
    // // @ts-ignore
    // const ProfileHOC: React.FC = () => <Profile/>
    // const DialogsHOC: React.FC = () => <Dialogs dialogs={props.dialogs} message={props.messages}  />
    // const NewsHOC: React.FC = () => <News/>;
    // const SettingsHOC: React.FC = () => <Settings/>;
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='content'>
                    <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage}
                                                                  addPost={props.addPost}
                                                                  updateNewPostText={props.updateNewPostText}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs dialogs={props.state.dialogs}
                                                                  messages={props.state.messages}/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    )

}

export default App;