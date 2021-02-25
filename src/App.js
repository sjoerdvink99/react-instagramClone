import React from "react";
import "./App.css";
import Post from "./Post";

const tijd = "00.25.27";

function App() {
  return (
    <div className='app'>
      <div className='app__header'>
        <img
          className='app__headerImage'
          src='https://1000merken.com/wp-content/uploads/2020/04/Instagram-Logo.png'
          alt=''
        />
      </div>
      <Post />
    </div>
  );
}

export default App;
