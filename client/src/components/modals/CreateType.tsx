import React, { FC, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { createType } from './../../api/deviceAPI';
import { ITypeBrand } from '../../store/DeviceStore';

interface IPropsCreateType {
    show?: boolean;
    onHide?: () => void
}

export const CreateType:FC<IPropsCreateType> = ({show, onHide}) => {
  const [value, setValue] = useState<string>('');

  const addType = () => {
    createType({ name: value }).then(data => {
      setValue('')
      if(onHide) onHide();
    });
  }
  
  return (
    <Modal
      size="lg"
      centered
      onHide={onHide}
      show={show}
    >
      <Modal.Header closeButton closeLabel=''>
        <Modal.Title id="contained-modal-title-vcenter">
          Add new type
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <Form>
              <Form.Control value={value} onChange={(e:any) => setValue(e.target.value)} placeholder={'Enter name of type'} />
          </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={'outline-danger'} onClick={onHide}>Close</Button>
        <Button variant={"outline-success"} onClick={addType}>Add</Button>
      </Modal.Footer>
    </Modal>
  );
};
