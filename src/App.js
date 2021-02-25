import React, { useState, useEffect } from "react";
import "./App.css";
import Post from "./Post";
import { db } from "./firebase";

const tijd = "01.20.00";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    );
  }, []);

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
          key={post.id}
          username={post.data.username}
          caption={post.data.caption}
          imageUrl={post.data.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
