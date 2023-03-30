import { Sidenav, Nav, Toggle } from "rsuite";
import PeopleBranchIcon from "@rsuite/icons/PeopleBranch";
import GlobalIcon from "@rsuite/icons/Global";
import { useState } from "react";

const SideBar = () => {
  const [activeKey, setActiveKey] = useState("1");
  return (
    <div style={{ width: 240, height: "100vh", backgroundColor: "#f7f7fa" }}>
      <Sidenav defaultOpenKeys={["3", "4"]}>
        <Sidenav.Body>
          <Nav activeKey={activeKey} onSelect={setActiveKey}>
            <Nav.Item eventKey="1" icon={<GlobalIcon />}>
              Quận/Huyện
            </Nav.Item>
            <Nav.Item eventKey="2" icon={<PeopleBranchIcon />}>
              Tỉnh/Thành phố
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};
export default SideBar;
