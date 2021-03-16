import React from 'react';
import './App.scss';
import {Navbar} from "./components/Navbar/Navbar";
import {Header} from "./components/Header/Header";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route} from 'react-router-dom';
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

type propsAppType = {
    state: any
    addPost: () => void
    updateNewPostText: (x: string) => void
}

const App: React.FC<any> = (props) => {
    let state = props.store.getState()
    console.log(state)
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='content'>
                    <Route path='/profile' render={() => <Profile profilePage={state.profilePage}
                                                                  addPost={props.store.addPost.bind(props.store)}
                                                                  updateNewPostText={props.store.updateNewPostText.bind(props.store)}/>}/>
                    {/*<Route path='/dialogs' render={() => <Dialogs dialogs={props.store.state.dialogs}*/}
                    {/*                                              messages={props.store.state.messages}/>}/>*/}
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    )

}

export default App;