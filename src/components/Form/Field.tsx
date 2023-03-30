import React, { forwardRef } from "react";
import { Form } from "rsuite";

const Field = forwardRef((props: any, ref: any) => {
  const { name, label, accepter, ...otherProps } = props;

  return (
    <>
      <Form.Group ref={ref}>
        <Form.ControlLabel>{label}</Form.ControlLabel>
        <Form.Control accepter={accepter} name={name} {...otherProps} />
      </Form.Group>
    </>
  );
});

export default Field;
