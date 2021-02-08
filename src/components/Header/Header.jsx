import logo from '../../logo.png'
import c from'./Header.module.css'

function Header() {
  return (
      <header className={c.header}>
        <div className={c.container}>
        <img
          src={logo}
          alt="logo"
        />
        </div>
      </header>
  );
}

export default Header;
