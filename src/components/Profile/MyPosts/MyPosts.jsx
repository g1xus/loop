// import c from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts() {
  return (
    <div>
      My posts
      <div>new post</div>
      <div>
        <Post message='I am gay' src='https://steamuserimages-a.akamaihd.net/ugc/956360544092217585/EBF1A2A3007DD64410AD57131C69F63EB8F05961/?imw=512&amp;imh=512&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true'/>
        <Post message='I am not gay' src='https://4.bp.blogspot.com/--Meik6GxenI/WmgS_i31j5I/AAAAAAAAALE/YRXj-HXJ9u8-9ll_B8S24W9AFLRtCRaWACEwYBhgL/s640/skull.png'/>
        <Post message='I am bisexual' src='https://yt3.ggpht.com/a/AATXAJwSmcIFTOwK8ycdF4bVKXspsOOqn8k_DSj6ifHgBw=s900-c-k-c0xffffffff-no-rj-mo'/>
      </div>
    </div>
  );
}

export default MyPosts;
