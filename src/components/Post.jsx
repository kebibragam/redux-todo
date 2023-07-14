import { useEffect, useState } from "react";

const Post = () => {
  const [posts, setPosts] = useState([]);
  async function getPosts () {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const postsList = await response.json();
    // console.log("postsList", postsList);
    setPosts(postsList);
  }
  useEffect(()=> {
    getPosts();
  },[]);

  return (
    <ul>
      {posts && posts.length >0  && posts.map((post) => {
        return <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      }) }
    </ul>
  )
}

export default Post