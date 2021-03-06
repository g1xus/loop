import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import { BrowserRouter, Route } from "react-router-dom"
import Profile from "./components/Profile/Profile";
import Messenger from "./components/Messenger/Messenger";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

function App(props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <div className="container">
                    <Nav />
                    <div className='app-wrapper-content'>
                        <Route path='/profile' render={() => <Profile posts={props.state.profilePage.posts} newPostText={props.state.profilePage.newPostText} dispatch={props.dispatch}/>} />
                        <Route path='/messenger' render={() => <Messenger messages={props.state.messengerPage.messages} chats={props.state.messengerPage.chats} newMessageText={props.state.messengerPage.newMessageText} dispatch={props.dispatch}/>} />
                        <Route path='/news' render={() => <News />} />
                        <Route path='/music' render={() => <Music />} />
                        <Route path='/settings' render={() => <Settings />} />

                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
