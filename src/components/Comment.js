import React from "react";

export const Comment = (props) => {
  return (
    <article className="comment__excerpt">
      <div className="comment__subject">{props.comment.name}</div>
      <div className="comment__body">{props.comment.body}</div>
      <div className="comment__email--commentor">{props.comment.email}</div>
    </article>
  );
};
