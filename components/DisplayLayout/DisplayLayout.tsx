import React from "react";
import classes from "./DisplayLayout.module.scss";

const DisplayLayout = ({ children }: { children: React.ReactNode }) => (
  <div className={classes.index}>
    <main className={classes.main}>{children}</main>
  </div>
);

export default DisplayLayout;
