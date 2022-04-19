import { HiBadgeCheck } from "react-icons/hi";

import { OneSection, OneSectionItems } from "interfaces";
import useValidation from "@/hooks/useValidation";
import { setStorage } from "@/utils/storage";
import Button from "@/components/Button/Button";
import Checkbox from "@/components/Checkbox/Checkbox";

import classes from "./Section.module.scss";

interface Props {
  data: OneSection;
  checked: OneSectionItems[];
  step: number;
  setChecked: (item: OneSectionItems[]) => void;
  setStep: (step: number) => void;
}

const Section = ({ data, checked, step, setChecked, setStep }: Props) => {
  const { currentStepValidation } = useValidation(step);

  const setStepHandler = () => {
    setStep(step + 1);
  };

  const getButtonText = () => {
    if (step === 1) return "Great progress, continue";
    if (step === 2) return "Almost done, continue";
    return "Congratulation, see the result";
  };

  const setCurrentSection = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    if (checked?.filter((one: OneSectionItems) => one.id === id).length) {
      const updated = checked.filter((item: OneSectionItems) => item.id !== id);
      setChecked(updated);
      setStorage("sections", updated);
      return;
    }
    setChecked((prev) => [...prev, { id, status: e.target.checked }]);
    setStorage("sections", [...checked, { id, status: e.target.checked }]);
  };

  return (
    <div className={classes.section}>
      <div className={classes.header}>
        <h2>
          {data.id}. {data.header}
        </h2>
        {currentStepValidation && (
          <HiBadgeCheck size={20} className={classes.icon} />
        )}
      </div>

      <div className={classes.sectionList}>
        {data.items.map((item) => (
          <div className={classes.checkboxWrap} key={item.id}>
            <Checkbox
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setCurrentSection(e, item.id)
              }
              value={!!checked.filter((one) => one.id === item.id).length}
            />
            <span>{item.name}</span>
          </div>
        ))}
      </div>

      {currentStepValidation && (
        <div className={classes.buttonWrap}>
          <Button
            text={getButtonText()}
            secoundary
            fullsize
            onClick={setStepHandler}
          />
        </div>
      )}
    </div>
  );
};

export default Section;
