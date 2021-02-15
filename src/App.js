import { Component } from "react";
import "./App.css";

import { startAction } from "./actions/startAction";
import { stopAction } from "./actions/stopAction";
import rotateAction from "./actionCreators/rotateAction";
import { getPosts, getPost } from "./actionCreators/postsActions";
import { getUsers, getUser } from "./actionCreators/usersActions";
import { getComments } from "./actionCreators/commentsAction";

import { DashboardPage } from "./pages/DashboardPage";
import { PostDetailsPage } from "./pages/PostDetailsPage";
import { UserDetailsPage } from "./pages/UserDetailsPage";
import PostsPage from "./pages/PostsPage";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => <DashboardPage {...this.props} />}
            />
            <Route
              exact
              path="/posts"
              render={(props) => <PostsPage {...this.props} />}
            />
            <Route
              exact
              path={["/post/", "/post/:id"]}
              render={(props) => <PostDetailsPage {...props} {...this.props} />}
            />
            <Route
              exact
              path={["/user/", "/user/:id"]}
              render={(props) => <UserDetailsPage {...props} {...this.props} />}
            />
            <Redirect to="/" />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
});
const mapDispatchToProps = (dispatch) => ({
  startAction: () => dispatch(startAction),
  stopAction: () => dispatch(stopAction),
  rotateAction: (payload) => dispatch(rotateAction(payload)),
  getPosts: () => dispatch(getPosts()),
  getPost: (payload) => dispatch(getPost(payload)),
  getUsers: () => dispatch(getUsers()),
  getUser: (payload) => dispatch(getUser(payload)),
  getComments: (payload) => dispatch(getComments(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
