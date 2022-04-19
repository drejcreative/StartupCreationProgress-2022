import { OneSection } from "interfaces";
import { getStorage } from "../utils/storage";
import useSection from "./useSection";

const useValidation = (step?: number) => {
  const { sections } = useSection();
  const savedSections = getStorage("sections");

  const savedSectionItem = savedSections?.map((item: OneSection) => item.id);
  const firstSectionItem = sections?.sectionOne?.items?.map(
    (item: OneSection) => item.id
  );
  const secoundSectionItem = sections?.sectionTwo?.items?.map(
    (item: OneSection) => item.id
  );
  const thirdSectionItem = sections?.sectionTree?.items?.map(
    (item: OneSection) => item.id
  );

  const stepOneValidation = firstSectionItem?.every((elem: OneSection) =>
    savedSectionItem?.includes(elem)
  );
  const stepTwoValidation = secoundSectionItem?.every((elem: OneSection) =>
    savedSectionItem?.includes(elem)
  );
  const stepTreeValidation = thirdSectionItem?.every((elem: OneSection) =>
    savedSectionItem?.includes(elem)
  );

  const currentStepValidation =
    (step === 1 && stepOneValidation) ||
    (step === 2 && stepOneValidation && stepTwoValidation) ||
    (step === 3 &&
      stepOneValidation &&
      stepTwoValidation &&
      stepTreeValidation);

  return {
    stepOneValidation,
    stepTwoValidation,
    stepTreeValidation,
    currentStepValidation,
  };
};

export default useValidation;
