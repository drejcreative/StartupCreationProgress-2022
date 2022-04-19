import styles from "./Steps.module.scss";

const Steps = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.steps}>{children}</div>
);

export default Steps;
