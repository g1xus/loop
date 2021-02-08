import logo from '../logo.png'

function Header() {
  return (
      <header className="header">
        <div className="header-container">
        <img
          src={logo}
          alt="logo"
        />
        </div>
      </header>
  );
}

export default Header;
