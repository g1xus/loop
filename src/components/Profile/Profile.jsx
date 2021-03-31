import c from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts.jsx'
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx'

function Profile(props) {
  return (
    <main>
      <ProfileInfo />
      <MyPosts posts={props.posts} newPostText={props.newPostText} dispatch={props.dispatch}/>
    </main>
  );
}

export default Profile;
