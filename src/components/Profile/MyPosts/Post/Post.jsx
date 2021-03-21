import c from "./Post.module.css";

function Post(props) {
  return (
    <div>
      <img src={props.img} alt='user avatar' className={c.avatar}/>
      {props.message}
    </div>
  );
}

export default Post;
