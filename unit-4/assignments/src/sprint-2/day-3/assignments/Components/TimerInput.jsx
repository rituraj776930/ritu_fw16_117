import React from "react";
import styles from "./Timer.module.css";

const TimerInput = ({ setMin }) => {
  return (
    <div className={styles.input}>
      <input
        type="number"
        placeholder="Enter Minutes"
        onChange={(e) => setMin(e.target.value)}
      />
    </div>
  );
};

export default TimerInput;
