import React from "react";
import { Loader, Placeholder } from "rsuite";

const RLoader = () => {
  return (
    <div>
      {/* <Placeholder.Paragraph rows={8} /> */}
      <Loader
        style={{ zIndex: 10 }}
        backdrop
        center
        size="md"
        content={"Waiting to finish"}
      />
    </div>
  );
};

export default RLoader;
