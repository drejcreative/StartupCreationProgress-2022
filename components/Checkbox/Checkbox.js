import React, { useState, useEffect } from "react";

import style from "./Checkbox.module.scss";

const Checkbox = ({ onChange, value, name, className }) => {
  const [checked, setChecked] = useState("");

  useEffect(() => {
    setChecked(value);
  }, [value]);

  const handleCheckboxChange = (e) => {
    setChecked(e.target.checked);
    onChange(e);
  };

  return (
    <div className={`${style.checkbox} ${className}`}>
      <input
        type="checkbox"
        checked={!!checked}
        name={name}
        onChange={handleCheckboxChange}
      />
    </div>
  );
};

export default Checkbox;
