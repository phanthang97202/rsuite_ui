import React, { useState } from "react";
import { Button, Modal, Placeholder } from "rsuite";

const RModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  return (
    <>
      <Button onClick={handleOpen}>Open</Button>
      <Modal open={isOpen}>
        <Modal.Header>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Placeholder.Paragraph rows={80}></Placeholder.Paragraph>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
          <Button>Ok</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RModal;
