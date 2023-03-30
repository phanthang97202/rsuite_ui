import React from "react";
import { Checkbox, CheckboxGroup, Divider } from "rsuite";
const data = ["A", "B", "C", "D", "E", "F"];
const RCheckbox = () => {
  return (
    <>
      <Divider>CHECK BOX</Divider>
      <Checkbox />
      <Checkbox> Default</Checkbox>
      <Checkbox defaultChecked> Checked</Checkbox>
      <Divider>CHECK ALL</Divider>
      <Checkbox>Check All</Checkbox>
      <CheckboxGroup>
        {data.map((item) => (
          <Checkbox key={item} value={item}>
            Item {item}
          </Checkbox>
        ))}
      </CheckboxGroup>
    </>
  );
};

export default RCheckbox;
