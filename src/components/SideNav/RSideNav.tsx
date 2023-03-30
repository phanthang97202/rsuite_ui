import { Dashboard } from "@rsuite/icons";
import React, { useState } from "react";
import { Button, Nav, Sidebar, Sidenav } from "rsuite";
import DashboardIcon from "@rsuite/icons/legacy/Dashboard";
import MagicIcon from "@rsuite/icons/legacy/Magic";

const RSideNav = () => {
  const [isExpand, setIsExpand] = useState(false);
  const handleExpand = () => {
    setIsExpand(isExpand === true ? false : true);
  };
  return (
    <div style={{ width: "300px" }}>
      <Sidenav
        defaultOpenKeys={["3", "4"]}
        // expanded={isExpand}
        // onExpand={() => setIsExpand(true)}
        expanded={isExpand}
      >
        <Sidenav.Body>
          <Nav>
            <Nav.Item eventKey="1" icon={<DashboardIcon />}>
              Dasboard
            </Nav.Item>
            <Nav.Item eventKey="2" icon={<DashboardIcon />}>
              User
            </Nav.Item>
            <Nav.Menu eventKey="3" title="Advanced" icon={<MagicIcon />}>
              <Nav.Item eventKey="3-1">Item A</Nav.Item>
              <Nav.Item eventKey="3-2">Item A</Nav.Item>
              <Nav.Item eventKey="3-3">Item A</Nav.Item>
              <Nav.Item eventKey="3-4">Item A</Nav.Item>
            </Nav.Menu>
            <Nav.Menu eventKey="4" title="Advanced" icon={<MagicIcon />}>
              <Nav.Item eventKey="4-1">Item A</Nav.Item>
              <Nav.Item eventKey="4-2">Item A</Nav.Item>
              <Nav.Item eventKey="4-3">Item A</Nav.Item>
              <Nav.Item eventKey="4-4">Item A</Nav.Item>
            </Nav.Menu>
          </Nav>
        </Sidenav.Body>
        <Sidenav.Toggle onToggle={handleExpand}>
          {/* <Button onClick={handleExpand}>Expand</Button> */}
        </Sidenav.Toggle>
      </Sidenav>
    </div>
  );
};

export default RSideNav;
