import styles from "./Steps.module.scss";

interface Props {
  step: number;
  currentStep: number;
}

const StepLine = ({ step, currentStep }: Props) => (
  <div
    className={`${styles.border} ${currentStep > step ? styles.active : ""}`}
  />
);

export default StepLine;
