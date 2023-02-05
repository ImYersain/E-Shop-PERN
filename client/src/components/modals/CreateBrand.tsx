import React, { FC, useContext } from "react";
import { Form, Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Context } from "../..";


interface IPropsCreateBrand {
    show?: boolean;
    onHide?: () => void
}

export const CreateBrand:FC<IPropsCreateBrand> = ({show, onHide}) => {
    const deviceStore = useContext(Context);
    const device = deviceStore?.device;

  return (
    <Modal size="lg" centered onHide={onHide} show={show}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add new brand
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control placeholder={"Enter name of type"} />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant={"outlined-danger"}
          onClick={onHide}
        >
          Close
        </Button>
        <Button
          variant={"outlined-success"}
          onClick={() => {
            console.log();
          }}
        >
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
