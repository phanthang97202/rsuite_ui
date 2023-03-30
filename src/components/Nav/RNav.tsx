import React from "react";
import { Nav } from "rsuite";
import HomeIcon from "@rsuite/icons/legacy/Home";
// import ResponsiveNav from "@rsuite/responsive-nav";
const items = [
  { eventKey: "A", label: "Item A" },
  { eventKey: "A", label: "Item A" },
  { eventKey: "A", label: "Item A" },
  { eventKey: "A", label: "Item A" },
  { eventKey: "A", label: "Item A" },
  { eventKey: "A", label: "Item A" },
  { eventKey: "A", label: "Item A" },
  { eventKey: "A", label: "Item A" },
  { eventKey: "A", label: "Item A" },
  { eventKey: "A", label: "Item A" },
  { eventKey: "A", label: "Item A" },
  { eventKey: "A", label: "Item A" },
];
console.log(items);
const RNav = () => {
  return (
    <>
      {/* cài thư viện npm i @rsuite/responsive-nav */}
      {/* <ResponsiveNav></ResponsiveNav> */}
      <Nav
        // vertical
        justified
        appearance={"tabs"}
        style={{ marginBottom: 50 }}
      >
        {/* style={{ padding: "20px 50px" }}
        style={{ padding: "20px 50px" }}
        style={{ padding: "20px 50px" }} */}
        <Nav.Item icon={<HomeIcon />}>Home</Nav.Item>
        <Nav.Item>Categories</Nav.Item>
        <Nav.Item disabled>Contact</Nav.Item>
        <Nav.Menu title="Products">
          <Nav.Item icon={<HomeIcon />}>Products A</Nav.Item>
          <Nav.Item>Products A</Nav.Item>
          <Nav.Item>Products A</Nav.Item>
          <Nav.Item>Products A</Nav.Item>
        </Nav.Menu>
      </Nav>
    </>
  );
};

export default RNav;
