import "./App.css";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Nav from "./components/Nav/Nav";
import Dialogs from "./components/Dialogs/Dialogs";

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <div className="container">
                <Nav/>
                <div className='app-wrapper-content'>
                    <Profile/>
                    {/*<Dialogs />*/}
                </div>
            </div>
        </div>
    );
}

export default App;
