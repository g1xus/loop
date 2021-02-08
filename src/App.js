import "./App.css";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="container">
        <Nav />
        <Profile />
      </div>
    </div>
  );
}

export default App;
