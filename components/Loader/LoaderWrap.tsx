import classes from "./Loadr.module.scss";

const LoaderWrap = ({ children }: { children: React.ReactNode }) => (
  <div className={classes.loaderWrap}>{children}</div>
);

export default LoaderWrap;
