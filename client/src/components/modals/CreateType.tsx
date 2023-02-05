import React, { FC } from "react";
import { Modal, Button, Form } from "react-bootstrap";

interface IPropsCreateType {
    show?: boolean;
    onHide?: () => void
}

export const CreateType:FC<IPropsCreateType> = ({show, onHide}) => {
  return (
    <Modal
      size="lg"
      centered
      onHide={onHide}
      show={show}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add new type
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <Form>
              <Form.Control placeholder={'Enter name of type'} />
          </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={'outlined-danger'} onClick={onHide}>Close</Button>
        <Button variant={'outlined-success'} onClick={() => {console.log()}}>Add</Button>
      </Modal.Footer>
    </Modal>
  );
};
