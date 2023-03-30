import React, { useState } from "react";
import { CheckPicker, Divider } from "rsuite";
import SpinnerIcon from "@rsuite/icons/legacy/Spinner";

interface IData {
  label: string;
  value: string;
}
const data = ["Thang", "Huan", "Bach"];

const RCheckPicker = () => {
  const [values, setValues] = useState<string[]>([]);
  const [done, setDone] = useState<boolean>(true);

  const handleCallApi = () => {
    setTimeout(() => {
      setDone(false ? true : false);
    }, 2000);
  };
  handleCallApi();

  //   loading first touch
  const [items, setItems] = useState<string[]>([]);
  const updateData = () => {
    if (items.length === 0) {
      setItems(data);
    }
  };
  const renderMenu = (menu: any) => {
    if (items.length === 0) {
      return (
        <p>
          <SpinnerIcon /> loanding...
        </p>
      );
    }
    return menu;
  };

  return (
    <div>
      <Divider>CHECK PICKER LOADING FIRST TOUCH</Divider>
      <CheckPicker
        data={(!items ? [] : items).map((item, index) => ({
          label: item,
          value: item,
        }))}
        onOpen={updateData}
        renderMenu={renderMenu}
      />
      <Divider>CHECK PICKER</Divider>
      <CheckPicker
        data={["Thang", "Huan", "Bach"].map((item, index) => ({
          label: item,
          value: item,
        }))}
        onChange={setValues}
        value={values}
        label="Users selected"
        appearance="subtle"
        loading={done}
      />
      <CheckPicker
        data={["Thang", "Huan", "Bach"].map((item, index) => ({
          label: item,
          value: item,
        }))}
        onChange={setValues}
        value={values}
        label="Users selected"
        appearance="default"
      />
    </div>
  );
};

export default RCheckPicker;
