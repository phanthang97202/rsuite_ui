import React from "react";
import {
  Message,
  useToaster,
  ButtonToolbar,
  SelectPicker,
  Button,
} from "rsuite";
const RToastMessage = () => {
  const toaster = useToaster();

  const message = (
    <Message showIcon type={"info"} closable>
      This is toast message
    </Message>
  );
  return (
    <div>
      {message}
      <Button
        onClick={() =>
          toaster.push(message, { placement: "topEnd", duration: 5000 })
        }
      >
        Push
      </Button>
      {/* <Button onClick={() => toaster.remove()}>Remove</Button>
        <Button onClick={() => toaster.clear()}>Clear</Button> */}
    </div>
  );
};

export default RToastMessage;
