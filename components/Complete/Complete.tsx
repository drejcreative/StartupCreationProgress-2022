import useRandomFact from "../../hooks/useRandomFact";
import { Loader } from "../Loader/Loader";
import LoaderWrap from "../Loader/LoaderWrap";

import classes from "./Complete.module.scss";

const Complete = () => {
  const { fact, isLoading } = useRandomFact();

  if (isLoading)
    return (
      <LoaderWrap>
        <Loader />
      </LoaderWrap>
    );

  return (
    <div className={classes.complete}>
      <img src="undraw_fireworks_q-5-ji.svg" />
      <h2>{fact.text}</h2>
    </div>
  );
};

export default Complete;
