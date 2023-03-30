import React, { useEffect, useState } from "react";
import { Button, Progress } from "rsuite";
type IPercent = number;

const RProgress = () => {
  const [countPercent, setCountPercent] = useState<IPercent>(0);

  useEffect(() => {
    if (countPercent < 100) {
      const handleCountPercent = () => {
        setCountPercent(countPercent + 10);
      };
      const timeId = setTimeout(handleCountPercent, 1000);
      return () => {
        clearTimeout(timeId);
      };
    }
  }, [countPercent]);

  return (
    <>
      <Button onClick={() => setCountPercent(countPercent + 10)}>+</Button>
      <Button onClick={() => setCountPercent(countPercent - 10)}>-</Button>
      <Progress.Line vertical></Progress.Line>
      <Progress.Circle
        style={{ width: "130px" }}
        percent={countPercent}
        status="active"
      ></Progress.Circle>
      <Progress.Line percent={countPercent} status="success"></Progress.Line>
      <Progress.Line
        percent={countPercent}
        showInfo={false}
        strokeColor={"#942a2a"}
      ></Progress.Line>
    </>
  );
};

export default RProgress;
