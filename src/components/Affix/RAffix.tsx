import React from "react";

import { Affix, Button, Placeholder } from "rsuite";

const RAffix: React.FC = () => {
  const container = React.useRef<HTMLDivElement>(null);
  return (
    // <>
    //   <div ref={container}>
    //     <Placeholder.Paragraph rows={6} />
    //     <p>
    //       Components such as navigation, buttons, etc. can be fixed in the
    //       visible range. Commonly used for pages with long content, fixed the
    //       specified elements in the visible range of the page to assist in quick
    //       operation.
    //     </p>
    //     <Affix
    //       top={10}
    //       container={() => {
    //         return container.current;
    //       }}
    //     >
    //       <Button>Affix: like Poition sticky </Button>
    //     </Affix>
    //     <Placeholder.Paragraph rows={10}></Placeholder.Paragraph>
    //   </div>
    // </>
    <>
      <div ref={container} style={{ background: "black" }}>
        <Placeholder.Paragraph rows={6} />
        <Affix
          top={0}
          //   container={() => {
          //     return container.current;
          //   }}
        >
          <Button appearance="primary" style={{ marginLeft: 100 }}>
            Top 0
          </Button>
        </Affix>
        <Placeholder.Paragraph rows={6} />
      </div>
      <Placeholder.Paragraph rows={20} />
    </>
  );
};

export default RAffix;
