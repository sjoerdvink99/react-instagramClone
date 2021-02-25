import React from "react";
import { Avatar } from "@material-ui/core";
import "./Post.css";

export default function Post({ username, caption, imageUrl }) {
  return (
    <div className='post'>
      <div className='post__header'>
        <Avatar src='' className='post__avatar' alt='' />
        <h3>{username}</h3>
      </div>
      <img className='post__image' src={imageUrl} alt='' />
      <h4 className='post__text'>
        <strong>{username}</strong> {caption}
      </h4>
    </div>
  );
}
