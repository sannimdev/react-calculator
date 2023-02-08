import React, { useState } from "react";
import PropTypes from "prop-types";
import DigitButton from "../DigitButton";
import StatusPane from "../StatusPane";
import styles from "./index.module.css";
import ClearButton from "../ClearButton";
import ModifierButton from "../ModifierButton";

const getClassNames = (styles = []) => styles.join(" ");
const digits = Array.from({ length: 10 }, (_, idx) => idx).sort((a, b) => b - a);
const modifiers = ["/", "X", "-", "+", "="];

function Calculator({ calculator }) {
  const [input, setInput] = useState(0);

  const numberPressHandler = (value) => {
    setInput("hello");
  };

  const clear = () => {
    setInput("0");
    calculator.clear();
  };

  return (
    <div className={styles.calculator}>
      <StatusPane>{input}</StatusPane>
      <div className={getClassNames([styles.digits, styles.flex])}>
        {digits.map((number) => (
          <DigitButton value={number} key={number} onClick={numberPressHandler} />
        ))}
      </div>
      <div className={getClassNames([styles.modifiers, styles.subgrid])}>
        <ClearButton onClick={clear} />
      </div>
      <div className={getClassNames([styles.operations, styles.subgrid])}>
        {modifiers.map((modifier) => (
          <ModifierButton key={modifier}>{modifier}</ModifierButton>
        ))}
      </div>
    </div>
  );
}

Calculator.propTypes = {
  calculator: PropTypes.object,
};

export default Calculator;
