import React from "react";
import './Post.css'

export const Post = (props) => {
  return (
    <article className="postPage__excerpt">
      <div className="excerpt__title">{props.post.title}</div>
      <span style={{cursor: "pointer"}}
        onClick={(e) => {
          e.preventDefault();
          e.view.location.assign(`/user/${props.post.userId}`);
        }}
        className="excerpt__username"
      >
        {props.postCreator.username}
      </span>
    </article>
  );
};
