import React from "react";
import { Container, Header, Nav, Navbar } from "rsuite";
import Content from "rsuite/esm/Content";
import Footer from "rsuite/esm/Footer";
import Sidebar from "rsuite/esm/Sidebar";
import CogIcon from "@rsuite/icons/legacy/Cog";

const RContainer = () => {
  return (
    <div>
      {/* <Container> Container, used for layout.
          <Header> Container header.
          <Content> Container content.
          <Footer> Container footer.
          <Sidebar> Container sidebar. */}
      <p>Container Rsuite</p>
      <div className="show-container">
        <Container>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Container>

        <Container>
          <Sidebar>Sidebar</Sidebar>
          <Container>
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Container>
        </Container>

        <Container>
          <Header>Header</Header>
          <Container>
            <Sidebar>Sidebar</Sidebar>
            <Content>Content</Content>
          </Container>
          <Footer>Footer</Footer>
        </Container>

        <Container>
          <Header>Header</Header>
          <Container>
            <Content>Content</Content>
            <Sidebar>Sidebar</Sidebar>
          </Container>
          <Footer>Footer</Footer>
        </Container>
      </div>

      <p>Tạo page</p>
      <Container>
        <Header>
          <Navbar appearance="inverse">
            <Navbar.Brand>PHANTHANG</Navbar.Brand>
            <Nav>
              <Nav.Item>Home</Nav.Item>
              <Nav.Item>Categories</Nav.Item>
              <Nav.Item>Contact</Nav.Item>
              <Nav.Item>About us</Nav.Item>
            </Nav>

            <Nav pullRight>
              <Nav.Item icon={<CogIcon />}>Account</Nav.Item>
            </Nav>
            <Nav>
              <Nav.Menu title="Drop down">
                <Nav.Item>Categories</Nav.Item>
                <Nav.Item>Contact</Nav.Item>
              </Nav.Menu>
            </Nav>
          </Navbar>
        </Header>

        <Content></Content>

        <Footer></Footer>
      </Container>
    </div>
  );
};

export default RContainer;
