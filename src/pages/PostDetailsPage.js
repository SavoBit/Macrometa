import React from "react";
import { Link } from "react-router-dom";

import { Post } from "../components/Post";
import { Comment } from "../components/Comment";

export class PostDetailsPage extends React.Component {
  constructor(props) {
    super(props);
    const id = props.match.params.id;
    props.getPost(id);
    props.getUsers();
    props.getComments(id);
  }

  renderPosts = () => {
    if (this.props.post.beforeLoading)
      return <p>Post loading not begun yet...</p>;
    if (this.props.post.loading) return <p>Loading the post...</p>;
    if (this.props.post.hasErrors)
      return <p>Unable to display the post as post not available.</p>;
    if (this.props.users.beforeLoading) return <p>Users not loaded yet...</p>;
    if (this.props.users.loading) return <p>Loading users...</p>;
    if (this.props.users.hasErrors)
      return <p>Unable to display posts as users not available.</p>;
    const postCreator = this.props.users.users.find(
      (user) => this.props.post.post.userId === user.id
    );
    return (
      <Post
        key={this.props.post.post.id}
        post={this.props.post.post}
        postCreator={postCreator}
      />
    );
  };

  renderComments = () => {
    if (this.props.comments.beforeLoading)
      return <p>Comments not loaded yet...</p>;
    if (this.props.comments.loading) return <p>Loading comments...</p>;
    if (this.props.comments.hasErrors)
      return <p>Unable to display comments.</p>;
    if (this.props.comments.beforeLoading)
      return <p>Comments not loaded yet...</p>;
    if (this.props.comments.hasErrors)
      return <p>Unable to display comments as comments not available.</p>;
    return this.props.comments.comments.map((comment) => {
      return <Comment key={comment.id} comment={comment} />;
    });
  };

  render() {
    return (
      <section>
        <Link to={`/posts`}>Goto Posts</Link>
        <h1>Post</h1>
        {this.renderPosts()}
        <h1>Comments Made on the Post</h1>
        {this.renderComments()}
      </section>
    );
  }
}

export default PostDetailsPage;
