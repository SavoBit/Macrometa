import { AppBar, Toolbar } from "@material-ui/core";
import React from "react";

export default function Header() {
  const displayDesktop = () => {
    return <Toolbar>Huddl Assignment</Toolbar>;
  };

  return (
    <header className="dashPage__header">
      <AppBar>{displayDesktop()}</AppBar>
    </header>
  );
}
