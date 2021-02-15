import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import logo from "../logo.svg";
import "./DashboardPage.css";

export class DashboardPage extends React.Component {
  render() {
    return (
      <div className="dashPage">
        <Header />
        <div className="dashPage__body">
          <img
            src={logo}
            className={
              "dashPage-logo" +
              (this.props.rotate.rotating ? "" : " dashPage-logo-paused")
            }
            alt="logo"
            style={{ pointerEvents: "all" }}
            onClick={() => {
              return this.props.rotateAction(!this.props.rotate.rotating);
            }}
          />
          <h1>Huddl Assignment</h1>
          <p>Submitted by --Mudit Goel</p>

          <Link to="/posts" className="button">
            View Posts
          </Link>
        </div>
      </div>
    );
  }
}
