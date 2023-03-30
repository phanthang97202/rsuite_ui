import { CheckOutline } from "@rsuite/icons";
import { createIconFont } from "@rsuite/icons";
import React from "react";
const IconFont = createIconFont({
  scriptUrl: "//at.alicdn.com/t/font_2144422_r174s9i1orl.js",
  commonProps: { style: { fontSize: 30, color: "#1675e0" } },
  onLoaded: () => {
    console.log("onLoaded");
  },
});
const RIcons = () => {
  return (
    <>
      <CheckOutline
        fill="violet"
        style={{ fontSize: "45px" }}
        pulse
        rotate={56}
      />
      <IconFont icon="rs-iconuser-badge" />
      <IconFont icon="rs-iconmember" />
      <IconFont icon="rs-icongear-16" spin />
      <IconFont icon="rs-iconreload" pulse />
      <IconFont icon="rs-iconnotice" rotate={90} />
      <IconFont icon="rs-iconrandom" />
      <IconFont icon="rs-iconrandom" flip="horizontal" />
      <IconFont icon="rs-icongrowth" />
      <IconFont icon="rs-icongrowth" flip="vertical" />
      <IconFont icon="rs-iconemail-fill" />
      <IconFont icon="rs-iconemail" />
    </>
  );
};

export default RIcons;
