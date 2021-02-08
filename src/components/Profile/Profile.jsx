import c from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts.jsx'

function Profile() {
  return (
    <main className={c.profile}>
      <div>
        <img
          src="https://images.unsplash.com/photo-1597778746724-58d858d69b7a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1030&q=80"
          alt="banner" className={c.banner}
        />
      </div>
      <div>ava+desc</div>
      <MyPosts />
    </main>
  );
}

export default Profile;
