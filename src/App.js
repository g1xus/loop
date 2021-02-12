import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import {BrowserRouter, Route} from "react-router-dom"
import Profile from "./components/Profile/Profile";
import Messenger from "./components/Messenger/Messenger";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <div className="container">
                    <Nav/>
                    <div className='app-wrapper-content'>
                        <Route path='/profile'component={Profile}/>
                        <Route path='/messenger' component={Messenger}/>
                        <Route path='/news'component={News}/>
                        <Route path='/music'component={Music}/>
                        <Route path='/Settings'component={Settings}/>

                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
