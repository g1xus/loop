// import c from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts() {
  return (
    <div>
      My posts
      <div>new post</div>
      <div>
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default MyPosts;
