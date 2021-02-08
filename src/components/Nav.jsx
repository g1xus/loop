import c from './Nav.module.css'


function Nav() {
  return (
    <nav className={c.nav}>
      <div className={c.item}>
        <a href="#c">Profile</a>
      </div>
      <div className={c.item}>
        <a href="#c">Messages</a>
      </div>
      <div className={c.item}>
        <a href="#c">News</a>
      </div>
      <div className={c.item}>
        <a href="#c">Music</a>
      </div>
      <div className={c.item}>
        <a href="#c">Setting</a>
      </div>
    </nav>
  );
}

export default Nav;
