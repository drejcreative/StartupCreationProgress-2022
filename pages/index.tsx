import { OneSectionItems } from "interfaces";
import { useEffect, useState } from "react";

import Complete from "@/components/Complete/Complete";
import DisplayLayout from "@/components/DisplayLayout/DisplayLayout";
import { Loader, LoaderWrap } from "@/components/Loader/Loader";
import Section from "@/components/Section/Section";
import Step from "@/components/Steps/Step";
import Steps from "@/components/Steps/Steps";
import useSection from "@/hooks/useSection";
import useValidation from "@/hooks/useValidation";
import { getStorage } from "@/utils/storage";

const Home = () => {
  const [step, setStep] = useState(1);
  const [checked, setChecked] = useState<OneSectionItems[] | []>([]);
  const { stepOneValidation, stepTwoValidation } = useValidation();
  const { sections, isLoading, isError } = useSection();

  useEffect(() => {
    const savedSections = getStorage("sections");
    if (savedSections) {
      setChecked(savedSections);
    }
  }, []);

  if (isLoading)
    return (
      <DisplayLayout>
        <LoaderWrap>
          <Loader />
        </LoaderWrap>
      </DisplayLayout>
    );

  if (isError) return <span>Error</span>;

  const getSection = () => {
    if (step === 1) return sections.sectionOne;
    if (step === 2) return sections.sectionTwo;
    return sections.sectionTree;
  };

  if (step === 4)
    return (
      <DisplayLayout>
        <Complete />
      </DisplayLayout>
    );

  return (
    <DisplayLayout>
      <h1>Startup Creation Progress</h1>

      <Section
        data={getSection()}
        step={step}
        setStep={setStep}
        setChecked={setChecked}
        checked={checked}
      />

      <Steps>
        <Step currentStep={step} step={1} setStep={setStep} />
        <Step
          currentStep={step}
          step={2}
          setStep={setStep}
          disabled={!stepOneValidation}
        />
        <Step
          currentStep={step}
          step={3}
          setStep={setStep}
          disabled={!stepOneValidation || !stepTwoValidation}
        />
      </Steps>
    </DisplayLayout>
  );
};

export default Home;
