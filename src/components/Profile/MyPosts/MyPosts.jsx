import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";


function MyPosts(props) {
  let postsElement = props.posts.map(p => <Post message={p.postText} img={p.postImg} id={p.postId} />)
  let addPost = () => {
    props.dispatch({type:'ADD-POST'});
  }
  let onPostChange = () => {
    let newText = newPostElement.current.value
    props.dispatch({type:'UPDATE-NEW-POST-TEXT', newText})
}
  let newPostElement = React.createRef();
  return (
    <div>
      My posts
      <div className={c.addPost}>
        <div><textarea cols="30" rows="2" ref={newPostElement} onChange={onPostChange} value={props.newPostText}></textarea></div>
        <div><button onClick={ addPost }>New post</button></div>
      </div>
      <div>
        {postsElement}
      </div>
    </div>
  );
}

export default MyPosts;
