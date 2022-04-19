import StepLine from "./StepLine";
import styles from "./Steps.module.scss";

interface Props {
  step: number;
  currentStep: number;
  disabled?: boolean;
  last?: boolean;
  setStep: (el: number) => void;
}

const Step = ({ step, currentStep, disabled, last, setStep }: Props) => {
  const onStepClick = () => {
    if (disabled) return;
    setStep(step);
  };

  return (
    <>
      <div
        className={`${styles.step} ${disabled ? styles.disabled : ""}`}
        onClick={onStepClick}
      >
        <span className={currentStep >= step ? styles.active : ""}>{step}</span>
      </div>
      {step !== 3 && <StepLine currentStep={currentStep} step={step} />}
    </>
  );
};

export default Step;
