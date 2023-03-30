import React from "react";
import { Breadcrumb } from "rsuite";

const RBredCrumb = () => {
  return (
    <>
      <p>BreadCrumb</p>
      <Breadcrumb maxItems={5} onExpand={() => {}} separator={"--"}>
        <Breadcrumb.Item>Item A</Breadcrumb.Item>
        <Breadcrumb.Item>Item B</Breadcrumb.Item>
        <Breadcrumb.Item>Item C</Breadcrumb.Item>
        <Breadcrumb.Item>Item D</Breadcrumb.Item>
        <Breadcrumb.Item>Item E</Breadcrumb.Item>
        <Breadcrumb.Item>Item F</Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
};

export default RBredCrumb;
