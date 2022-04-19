import React, { useState, useEffect } from "react";

import style from "./Checkbox.module.scss";

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  value: boolean;
  link?: boolean;
  className?: string;
  name?: string;
}

const Checkbox = ({ onChange, value, name, className }: Props) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(value);
  }, [value]);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
