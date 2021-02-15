import React from "react";

import { User } from "../components/User";
import { Link } from "react-router-dom";

export class UserDetailsPage extends React.Component {
  constructor(props) {
    const id = props.match.params.id;
    super(props);
    props.getUser(id);
  }

  renderUser = () => {
    if (this.props.user.beforeLoading) return <p>User not loaded yet...</p>;
    if (this.props.user.loading) return <p>Loading user...</p>;
    if (this.props.user.hasErrors) return <p>Unable to display user.</p>;
    if (this.props.user.beforeLoading) return <p>User not loaded yet...</p>;
    if (this.props.user.loading) return <p>Loading user...</p>;
    if (this.props.user.hasErrors)
      return <p>Unable to display as user not available.</p>;
    return <User key={this.props.user.user.id} user={this.props.user.user} />;
  };

  render() {
    return (
      <section>
        <Link to={`/posts`}>Goto Posts</Link>
        <h1>User</h1>
        {this.renderUser()}
      </section>
    );
  }
}

export default UserDetailsPage;
