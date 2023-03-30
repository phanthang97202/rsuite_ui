import React from "react";
import { Placeholder } from "rsuite";

const RPlaceholder = () => {
  return (
    <>
      <Placeholder.Paragraph></Placeholder.Paragraph>
      <Placeholder.Paragraph graph={"circle"}></Placeholder.Paragraph>
      <Placeholder.Paragraph graph={"square"}></Placeholder.Paragraph>
      <p>Xin chào tất cả các bạn</p>
      <Placeholder.Paragraph
        graph={"image"}
        rows={5}
        active
      ></Placeholder.Paragraph>
      Grid
      <Placeholder.Grid rows={5} rowHeight={50} columns={5}></Placeholder.Grid>
      Graph
      <Placeholder.Graph width={200} active></Placeholder.Graph>
    </>
  );
};

export default RPlaceholder;
