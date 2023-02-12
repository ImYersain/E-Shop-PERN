import React, { FC, useContext, useState } from "react";
import { Form, Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Context } from "../..";
import { IContextProviderProps } from '../../index';
import { createBrand } from '../../api/deviceAPI';


interface IPropsCreateBrand {
    show?: boolean;
    onHide?: () => void
}

export const CreateBrand:FC<IPropsCreateBrand> = ({show, onHide}) => {
    const [value, setValue] = useState('');

    const onAddBrand = () => {
        createBrand({name: value}).then(data => {
            setValue('');
            if(onHide) onHide();
        })
    }

  return (
    <Modal size="lg" centered onHide={onHide} show={show}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add new brand
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control value={value} onChange={(e:any) => setValue(e.target.value)} placeholder={"Enter name of type"} />
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
          onClick={() => onAddBrand()}
        >
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
