import React from "react";

export const User = (props) => {
  return (
    <article className="section">
      <div className="section__username">{props.user.username}</div>
      <div className="section__name">{props.user.name}</div>
      <div className="section__email">{props.user.email}</div>
      <div className="section__website">{props.user.website}</div>
      <div className="company">
        <h1>Company Info</h1>
        <div className="company__name">{props.user.company.name}</div>
        <div className="company__catchPhrase">
          {props.user.company.catchPhrase}
        </div>
        <div className="company__bs">{props.user.company.bs}</div>
      </div>
    </article>
  );
};
