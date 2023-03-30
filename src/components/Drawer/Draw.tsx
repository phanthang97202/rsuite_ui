import React, { useEffect, useRef, useState } from "react";
import FacebookOfficialIcon from "@rsuite/icons/legacy/FacebookOfficial";
import { Drawer, ButtonToolbar, Button, Placeholder } from "rsuite";
import RLoader from "../Loader/RLoader";

const RDrawer = () => {
  const [open, setOpen] = React.useState(false);
  const [openWithHeader, setOpenWithHeader] = React.useState(false);
  const buttonOne = useRef<HTMLButtonElement>(null);

  const [load, setLoad] = React.useState(false);
  const handleClick = () => {
    const sleep = (ms: number) => {
      return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
      });
    };
    sleep(1000)
      .then(() => {
        console.log(1);
        setLoad(true);
        return sleep(1000);
      })
      .then(() => {
        console.log(2);
        return sleep(1000);
      })
      .then(() => {
        console.log(3);
        return sleep(1000);
      })
      .then(() => {
        setLoad(false);
        console.log(buttonOne.current);
      });
  };

  return (
    <>
      {load && <RLoader />}
      <ButtonToolbar>
        <Button
          ref={buttonOne}
          //   block
          //   {load  ?  : ''}
          loading={load}
          //   disabled
          startIcon={<FacebookOfficialIcon />}
          appearance="primary"
          onClick={() => {
            // setOpen(true);
            handleClick();
          }}
          size="md"
        >
          Open
        </Button>
        <Button active onClick={() => setOpenWithHeader(true)}>
          Open with header
        </Button>
      </ButtonToolbar>
      <Drawer
        style={{ width: "50%" }}
        open={open}
        onClose={() => setOpen(false)}
      >
        <Drawer.Body>
          <Placeholder.Paragraph />
        </Drawer.Body>
      </Drawer>
      <Drawer
        style={{ width: "50%" }}
        open={openWithHeader}
        onClose={() => setOpenWithHeader(false)}
      >
        <Drawer.Header>
          <Drawer.Title>Drawer Title</Drawer.Title>
          <Drawer.Actions>
            <Button onClick={() => setOpenWithHeader(false)}>Cancel</Button>
            <Button
              onClick={() => setOpenWithHeader(false)}
              appearance="primary"
            >
              Confirm
            </Button>
          </Drawer.Actions>
        </Drawer.Header>
        <Drawer.Body>
          <Placeholder.Paragraph />
        </Drawer.Body>
      </Drawer>
    </>
  );
};

export default RDrawer;
