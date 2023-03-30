import React from "react";
import { ButtonToolbar, Dropdown, IconButton } from "rsuite";
import PageIcon from "@rsuite/icons/Page";
import PlusIcon from "@rsuite/icons/Plus";

const renderIconButton = () => {
  return <IconButton icon={<PlusIcon />} circle></IconButton>;
};

const RDropdown = () => {
  return (
    <div>
      <p>
        A drop-down menu is a navigation that uses selectpicker if you want to
        select a value.
      </p>
      <ButtonToolbar>
        <Dropdown
          // placement="rightStart"
          size="lg"
          title="Dropdown"
          activeKey={"a"}
          trigger={"hover"}
        >
          <Dropdown.Item>Google</Dropdown.Item>
          <Dropdown.Item eventKey={"a"}>Facebook</Dropdown.Item>
          <Dropdown.Item disabled>Twitter</Dropdown.Item>
        </Dropdown>

        <Dropdown
          renderToggle={renderIconButton}
          placement="topEnd"
          noCaret
          title="Dropdown"
        >
          <Dropdown.Item icon={<PageIcon />}>Google</Dropdown.Item>
          <Dropdown.Item>Facebook</Dropdown.Item>
          <Dropdown.Item>Twitter</Dropdown.Item>
          <Dropdown.Menu title="Dropdown" trigger="click">
            <Dropdown.Item panel>Google</Dropdown.Item>
            <Dropdown.Item divider>Facebook</Dropdown.Item>
            <Dropdown.Item>Twitter</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </ButtonToolbar>
    </div>
  );
};

export default RDropdown;
