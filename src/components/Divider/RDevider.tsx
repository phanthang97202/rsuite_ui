import React from "react";
import { Divider, Placeholder } from "rsuite";

const RDevider = () => {
  return (
    <div>
      <Placeholder.Paragraph rows={2}></Placeholder.Paragraph>
      <Divider>This is devider</Divider>
      <Placeholder.Paragraph rows={2}></Placeholder.Paragraph>

      <p>
        Phan
        <Divider vertical></Divider>
        Van
        <Divider vertical></Divider>
        Thang
      </p>
    </div>
  );
};

export default RDevider;
