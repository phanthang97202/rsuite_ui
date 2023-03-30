import React from "react";
import { Col, Divider, Grid, Row } from "rsuite";

const RGrid = () => {
  return (
    <div>
      <Divider>HỆ THỐNG RESPONSIVE TRONG RSUITE</Divider>
      <p>
        Grid layout cung cấp 24 lưới, giống bootstrap gồm 3 component chính:
        Grid, Row, Col
        <br />
        Tương ứng: <br />
        xxl: extra large lớn hơn hoặc = 1400px <br /> xl extra large lớn hơn
        hoặc = 1200px <br /> lg large lớn hơn hoặc = 992px <br /> md medium lớn
        hơn hoặc =768px sm <br />
        small lớn hơn hoặc = 576px <br /> sx extra-small nhỏ hơn 576px
      </p>

      <Divider>BEGIN</Divider>
      <Grid fluid>
        <Col xs={2}>Box 1</Col>
        <Col xs={2}>Box 1</Col>
        <Col xs={2}>Box 1</Col>
        <Col xs={2}>Box 1</Col>
        <Col xs={2}>Box 1</Col>
        <Col xs={2}>Box 1</Col>
        <Col xs={2}>Box 1</Col>
        <Col xs={2}>Box 1</Col>
        <Col xs={2}>Box 1</Col>
        <Col xs={2}>Box 1</Col>
        <Col xs={2}>Box 1</Col>
        <Col xs={2}>Box 1</Col>
      </Grid>
      <Grid fluid>
        <Col xs={4}>Box 1</Col>
        <Col xs={4}>Box 1</Col>
        <Col xs={4}>Box 1</Col>
        <Col xs={4}>Box 1</Col>
        <Col xs={4}>Box 1</Col>
        <Col xs={4}>Box 1</Col>
        <Col xs={4}>Box 1</Col>
        <Col xs={4}>Box 1</Col>
        <Col xs={4}>Box 1</Col>
        <Col xs={4}>Box 1</Col>
        <Col xs={4}>Box 1</Col>
        <Col xs={4}>Box 1</Col>
        <Col xs={4}>Box 1</Col>
        <Col xs={4}>Box 1</Col>
        <Col xs={4}>Box 1</Col>
        <Col xs={4}>Box 1</Col>
      </Grid>
      <Grid fluid>
        <Col xs={8}>Box 1</Col>
        <Col xs={16}>Box 1</Col>
        <Col xs={8}>Box 1</Col>
        <Col xs={8}>Box 1</Col>
        <Col xs={8}>Box 1</Col>
        <Col xs={8}>Box 1</Col>
        <Col xs={8}>Box 1</Col>
        <Col xs={8}>Box 1</Col>
        <Col xs={8}>Box 1</Col>
        <Col xs={8}>Box 1</Col>
        <Col xs={8}>Box 1</Col>
        <Col xs={8}>Box 1</Col>
        <Col xs={8}>Box 1</Col>
        <Col xs={8}>Box 1</Col>
        <Col xs={8}>Box 1</Col>
        <Col xs={8}>Box 1</Col>
      </Grid>
      <Grid fluid>
        <Col style={{ backgroundColor: "red" }} xl={6} lg={8} md={12} xs={24}>
          RESPONSIVE BOX
        </Col>
        <Col
          style={{ backgroundColor: "violet" }}
          xl={6}
          lg={8}
          md={12}
          xs={24}
        >
          RESPONSIVE BOX
        </Col>
        <Col style={{ backgroundColor: "black" }} xl={6} lg={8} md={12} xs={24}>
          RESPONSIVE BOX
        </Col>
        <Col style={{ backgroundColor: "brown" }} xl={6} lg={8} md={12} xs={24}>
          RESPONSIVE BOX
        </Col>
        <Col style={{ backgroundColor: "green" }} xl={6} lg={8} md={12} xs={24}>
          RESPONSIVE BOX
        </Col>
        <Col style={{ backgroundColor: "blue" }} xl={6} lg={8} md={12} xs={24}>
          RESPONSIVE BOX
        </Col>
        <Col
          style={{ backgroundColor: "purple" }}
          xl={6}
          lg={8}
          md={12}
          xs={24}
        >
          RESPONSIVE BOX
        </Col>
      </Grid>

      <Grid fluid>
        <Row>
          <Col style={{ backgroundColor: "purple" }} lg={8} md={12} xs={24}>
            Responsive With Row
          </Col>
          <Col style={{ backgroundColor: "black" }} lg={8} md={12} xs={12}>
            Responsive With Row
          </Col>
          <Col style={{ backgroundColor: "red" }} lg={8} md={12} xs={24}>
            Responsive With Row
          </Col>
        </Row>
      </Grid>

      <Divider>RESPONSIVE WITH GUTTER</Divider>
      <Grid fluid>
        <Row gutter={16}>
          <Col lg={6} md={8} xs={12}>
            <div style={{ backgroundColor: "red" }} className="show-col">
              xs={4}
            </div>
          </Col>
          <Col lg={6} md={8} xs={12}>
            <div style={{ backgroundColor: "violet" }} className="show-col">
              xs={4}
            </div>
          </Col>
          <Col lg={6} md={8} xs={12}>
            <div style={{ backgroundColor: "green" }} className="show-col">
              xs={4}
            </div>
          </Col>
          <Col lg={6} md={8} xs={12}>
            <div style={{ backgroundColor: "blue" }} className="show-col">
              xs={4}
            </div>
          </Col>
          <Col lg={6} md={8} xs={12}>
            <div style={{ backgroundColor: "purple" }} className="show-col">
              xs={4}
            </div>
          </Col>
          <Col lg={6} md={8} xs={12}>
            <div style={{ backgroundColor: "brown" }} className="show-col">
              xs={4}
            </div>
          </Col>
        </Row>
      </Grid>

      <Divider>
        OFFSET: Dịch cột về bên phải màn hình theo lg md xs, ....
      </Divider>
      <Grid fluid>
        <Row>
          <Col style={{ backgroundColor: "red" }} lg={8} lgOffset={16}>
            OFF SET
          </Col>
        </Row>
      </Grid>

      <Divider>HIDDEN GRID</Divider>
      <Grid fluid>
        <Row>
          <Col style={{ backgroundColor: "red" }} lg={12} md={24}>
            Not Hidden
          </Col>
          <Col style={{ backgroundColor: "black" }} lg={12} mdHidden>
            Hidden
          </Col>
        </Row>
      </Grid>
      <Divider>NESTED GRID</Divider>

      <Divider>END</Divider>
    </div>
  );
};

export default RGrid;
