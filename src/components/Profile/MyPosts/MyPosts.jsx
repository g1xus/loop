// import c from "./MyPosts.module.css";
import Post from "./Post/Post";


function MyPosts(props) {
let postsElement = props.posts.map( p => <Post message={p.message} img={p.img} id={p.id}/>)
  return (
    <div>
      My posts
      <div>new post</div>
      <div>
        { postsElement }
      </div>
    </div>
  );
}

export default MyPosts;
