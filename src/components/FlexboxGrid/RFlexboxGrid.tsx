import React from "react";
import { Col, Divider, FlexboxGrid } from "rsuite";

const RFlexboxGrid = () => {
  return (
    <div>
      <Divider>FLEX BOX IN RSUITE</Divider>
      <p>Được chia thành 24 lưới, bootstrap thì 12 </p>
      <FlexboxGrid>
        <FlexboxGrid.Item
          style={{ backgroundColor: "red", height: "100px" }}
          colspan={6}
        >
          Box 1
        </FlexboxGrid.Item>
        <FlexboxGrid.Item
          style={{ backgroundColor: "violet", height: "100px" }}
          colspan={6}
        >
          Box 1
        </FlexboxGrid.Item>
        <FlexboxGrid.Item
          style={{ backgroundColor: "green", height: "100px" }}
          colspan={6}
        >
          Box 1
        </FlexboxGrid.Item>
        <FlexboxGrid.Item
          style={{ backgroundColor: "black", height: "100px" }}
          colspan={6}
        >
          Box 1
        </FlexboxGrid.Item>
        <FlexboxGrid.Item
          style={{ backgroundColor: "red", height: "100px" }}
          colspan={6}
        >
          Box 1
        </FlexboxGrid.Item>
        <FlexboxGrid.Item
          style={{ backgroundColor: "violet", height: "100px" }}
          colspan={6}
        >
          Box 1
        </FlexboxGrid.Item>
        <FlexboxGrid.Item
          style={{ backgroundColor: "green", height: "100px" }}
          colspan={6}
        >
          Box 1
        </FlexboxGrid.Item>
        <FlexboxGrid.Item
          style={{ backgroundColor: "black", height: "100px" }}
          colspan={6}
        >
          Box 1
        </FlexboxGrid.Item>
      </FlexboxGrid>

      <FlexboxGrid justify="center">
        <FlexboxGrid.Item style={{ backgroundColor: "red" }} colspan={4}>
          colspan 4 and justify="center"
        </FlexboxGrid.Item>
        <FlexboxGrid.Item style={{ backgroundColor: "black" }} colspan={4}>
          colspan 4 and justify="center"
        </FlexboxGrid.Item>
        <FlexboxGrid.Item style={{ backgroundColor: "violet" }} colspan={4}>
          colspan 4 and justify="center"
        </FlexboxGrid.Item>
        <FlexboxGrid.Item style={{ backgroundColor: "blue" }} colspan={4}>
          colspan 4 and justify="center"
        </FlexboxGrid.Item>
      </FlexboxGrid>
      <FlexboxGrid justify="space-between">
        <FlexboxGrid.Item style={{ backgroundColor: "red" }} colspan={4}>
          colspan 4 and justify="space-between"
        </FlexboxGrid.Item>
        <FlexboxGrid.Item style={{ backgroundColor: "black" }} colspan={4}>
          colspan 4 and justify="space-between"
        </FlexboxGrid.Item>
        <FlexboxGrid.Item style={{ backgroundColor: "violet" }} colspan={4}>
          colspan 4 and justify="space-between"
        </FlexboxGrid.Item>
        <FlexboxGrid.Item style={{ backgroundColor: "blue" }} colspan={4}>
          colspan 4 and justify="space-between"
        </FlexboxGrid.Item>
      </FlexboxGrid>
      <FlexboxGrid justify="space-around">
        <FlexboxGrid.Item style={{ backgroundColor: "red" }} colspan={4}>
          colspan 4 and justify="space-around"
        </FlexboxGrid.Item>
        <FlexboxGrid.Item style={{ backgroundColor: "black" }} colspan={4}>
          colspan 4 and justify="space-around"
        </FlexboxGrid.Item>
        <FlexboxGrid.Item style={{ backgroundColor: "violet" }} colspan={4}>
          colspan 4 and justify="space-around"
        </FlexboxGrid.Item>
        <FlexboxGrid.Item style={{ backgroundColor: "blue" }} colspan={4}>
          colspan 4 and justify="space-around"
        </FlexboxGrid.Item>
      </FlexboxGrid>
      <FlexboxGrid justify="start">
        <FlexboxGrid.Item style={{ backgroundColor: "red" }} colspan={4}>
          colspan 4 and justify="start"
        </FlexboxGrid.Item>
        <FlexboxGrid.Item style={{ backgroundColor: "black" }} colspan={4}>
          colspan 4 and justify="start"
        </FlexboxGrid.Item>
        <FlexboxGrid.Item style={{ backgroundColor: "violet" }} colspan={4}>
          colspan 4 and justify="start"
        </FlexboxGrid.Item>
        <FlexboxGrid.Item style={{ backgroundColor: "blue" }} colspan={4}>
          colspan 4 and justify="start"
        </FlexboxGrid.Item>
      </FlexboxGrid>
      <FlexboxGrid justify="end">
        <FlexboxGrid.Item style={{ backgroundColor: "red" }} colspan={4}>
          colspan 4 and justify="end"
        </FlexboxGrid.Item>
        <FlexboxGrid.Item style={{ backgroundColor: "black" }} colspan={4}>
          colspan 4 and justify="end"
        </FlexboxGrid.Item>
        <FlexboxGrid.Item style={{ backgroundColor: "violet" }} colspan={4}>
          colspan 4 and justify="end"
        </FlexboxGrid.Item>
        <FlexboxGrid.Item style={{ backgroundColor: "blue" }} colspan={4}>
          colspan 4 and justify="end"
        </FlexboxGrid.Item>
      </FlexboxGrid>
      <FlexboxGrid align="top">
        <FlexboxGrid.Item
          style={{ backgroundColor: "red", lineHeight: "14px" }}
          colspan={4}
        >
          colspan 4 and align="top"
        </FlexboxGrid.Item>
        <FlexboxGrid.Item
          style={{ backgroundColor: "black", lineHeight: "24px" }}
          colspan={4}
        >
          colspan 4 and align="top"
        </FlexboxGrid.Item>
        <FlexboxGrid.Item
          style={{ backgroundColor: "violet", lineHeight: "34px" }}
          colspan={4}
        >
          colspan 4 and align="top"
        </FlexboxGrid.Item>
        <FlexboxGrid.Item
          style={{ backgroundColor: "blue", lineHeight: "44px" }}
          colspan={4}
        >
          colspan 4 and align="top"
        </FlexboxGrid.Item>
      </FlexboxGrid>
      <FlexboxGrid align="middle">
        <FlexboxGrid.Item
          style={{ backgroundColor: "red", lineHeight: "14px" }}
          colspan={4}
        >
          colspan 4 and align="middle"
        </FlexboxGrid.Item>
        <FlexboxGrid.Item
          style={{ backgroundColor: "black", lineHeight: "24px" }}
          colspan={4}
        >
          colspan 4 and align="middle"
        </FlexboxGrid.Item>
        <FlexboxGrid.Item
          style={{ backgroundColor: "violet", lineHeight: "34px" }}
          colspan={4}
        >
          colspan 4 and align="middle"
        </FlexboxGrid.Item>
        <FlexboxGrid.Item
          style={{ backgroundColor: "blue", lineHeight: "44px" }}
          colspan={4}
        >
          colspan 4 and align="middle"
        </FlexboxGrid.Item>
      </FlexboxGrid>
      <FlexboxGrid align="bottom">
        <FlexboxGrid.Item
          style={{ backgroundColor: "red", lineHeight: "14px" }}
          colspan={4}
        >
          colspan 4 and align="bottom"
        </FlexboxGrid.Item>
        <FlexboxGrid.Item
          style={{ backgroundColor: "black", lineHeight: "24px" }}
          colspan={4}
        >
          colspan 4 and align="bottom"
        </FlexboxGrid.Item>
        <FlexboxGrid.Item
          style={{ backgroundColor: "violet", lineHeight: "34px" }}
          colspan={4}
        >
          colspan 4 and align="bottom"
        </FlexboxGrid.Item>
        <FlexboxGrid.Item
          style={{ backgroundColor: "blue", lineHeight: "44px" }}
          colspan={4}
        >
          colspan 4 and align="bottom"
        </FlexboxGrid.Item>
      </FlexboxGrid>

      <p>ORDER VỊ TRÍ TRONG FLEX BOX</p>
      <FlexboxGrid>
        <FlexboxGrid.Item colspan={5} order={2}>
          box 1
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={5} order={4}>
          box 2
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={5} order={3}>
          box 3
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={5} order={1}>
          box 4
        </FlexboxGrid.Item>
      </FlexboxGrid>

      <Divider>RESPONSIVE WITH FLEXBOX</Divider>
      <FlexboxGrid>
        <FlexboxGrid.Item
          style={{ backgroundColor: "red" }}
          as={Col}
          colspan={24}
          md={6}
        >
          Box Responsive 1
        </FlexboxGrid.Item>
        <FlexboxGrid.Item
          style={{ backgroundColor: "black" }}
          as={Col}
          colspan={24}
          md={6}
        >
          Box Responsive 2
        </FlexboxGrid.Item>
        <FlexboxGrid.Item
          style={{ backgroundColor: "violet" }}
          as={Col}
          colspan={24}
          md={6}
        >
          Box Responsive 3
        </FlexboxGrid.Item>
        <FlexboxGrid.Item
          style={{ backgroundColor: "green" }}
          as={Col}
          colspan={24}
          md={6}
        >
          Box Responsive 4
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </div>
  );
};

export default RFlexboxGrid;
