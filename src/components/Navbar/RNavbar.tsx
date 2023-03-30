import React from "react";
import { Nav, Navbar } from "rsuite";
import CogIcon from "@rsuite/icons/legacy/Cog";

const RNavbar = () => {
  return (
    <>
      <Navbar appearance="inverse" style={{ backgroundColor: "blue" }}>
        <Nav>
          <Nav.Item>Home</Nav.Item>
          <Nav.Item>News</Nav.Item>
          <Nav.Item>Product</Nav.Item>
          <Nav.Menu title="More">
            <Nav.Item>Home</Nav.Item>
            <Nav.Item>News</Nav.Item>
            <Nav.Item>Product</Nav.Item>
          </Nav.Menu>
        </Nav>
        <Nav pullRight>
          <Nav.Item icon={<CogIcon />}>Setting</Nav.Item>
        </Nav>
      </Navbar>
    </>
  );
};

export default RNavbar;
