import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="container">
        <Nav />
        <Main />
      </div>
    </div>
  );
}

export default App;
