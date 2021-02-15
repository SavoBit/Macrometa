import React from "react";

import { Post } from "../components/Post";
import Search from "../components/Search";

import { Link } from "react-router-dom";

export class PostsPage extends React.Component {
  constructor(props) {
    super(props);
    props.getPosts();
    props.getUsers();
  }

  renderPosts = () => {
    if (this.props.users.beforeLoading) return <p>Posts not loaded yet...</p>;
    if (this.props.posts.loading) return <p>Loading posts...</p>;
    if (this.props.posts.hasErrors) return <p>Unable to display posts.</p>;
    if (this.props.users.beforeLoading) return <p>Users not loaded yet...</p>;
    if (this.props.users.loading) return <p>Loading users...</p>;
    if (this.props.users.hasErrors)
      return <p>Unable to display posts as users not available.</p>;
    return this.props.posts.posts.map((post) => {
      const postCreator = this.props.users.users.find(
        (user) => post.userId === user.id
      );
      return (
        <Link
          key={post.id}
          style={{
            textDecoration: "none",
            color: "black",
            pointerEvents: "all",
          }}
          to={`/post/${post.id}`}
        >
          <Post post={post} postCreator={postCreator} />
        </Link>
      );
    });
  };

  render() {
    return (
      <section>
        <Search users ={this.props.users}/>
        <h1>Posts</h1>
        {this.renderPosts()}
      </section>
    );
  }
}

export default PostsPage;
