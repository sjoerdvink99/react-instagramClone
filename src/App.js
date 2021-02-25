import React, { useState } from "react";
import "./App.css";
import Post from "./Post";

const tijd = "00.57.42";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "sjoerdvink",
      caption: "my first post",
      imageUrl: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
    },
    {
      username: "sjoerdvink",
      caption: "my first post",
      imageUrl: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
    },
  ]);

  return (
    <div className='app'>
      <div className='app__header'>
        <img
          className='app__headerImage'
          src='https://1000merken.com/wp-content/uploads/2020/04/Instagram-Logo.png'
          alt=''
        />
      </div>
      {posts.map((post) => (
        <Post
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
