// import c from "./MyPosts.module.css";
import Post from "./Post/Post";

let posts = [
  { message: 'I am gay', img: 'https://clck.ru/TmX9a', id: '1' },
  { message: 'I am not gay', img: 'https://clck.ru/TmXQo', id: '2' },
  { message: 'I am bisexual', img: 'https://clck.ru/TmXKJ', id: '3' },
  { message: 'I am bisexual', img: 'https://clck.ru/TmXKJ', id: '3' },
  { message: 'I am bisexual', img: 'https://clck.ru/TmXKJ', id: '3' }
]

let postsElement = posts.map( p=> <Post message={p.message} img={p.img} id={p.id}/>)

function MyPosts() {
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
