import c from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts.jsx'
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx'

function Profile() {
  return (
    <main>
      <ProfileInfo />
      <MyPosts />
    </main>
  );
}

export default Profile;
