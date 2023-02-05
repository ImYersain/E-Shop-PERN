import React, { FC, useContext, useState } from "react";
import { Form, Dropdown, Col, Row } from 'react-bootstrap';
import { Context, IContextProviderProps } from '../../index';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


interface IPropsCreateDevice {
    show?: boolean;
    onHide?: () => void
}
interface IInfo {
    title?: string,
    description?: string,
    number?: number
}

export const CreateDevice:FC<IPropsCreateDevice> = ({show, onHide}) => {
    const context = useContext<IContextProviderProps | null>(Context);
    const deviceStore = context?.device;
    const [info, setInfo] = useState<Array<IInfo>>([]);

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number:number | undefined) => {
        setInfo(info.filter(item => item.number != number))
    }
    
  return (
    <Modal size="lg" centered onHide={onHide} show={show}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add new device
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Dropdown className='mt-2 mb-2'>
            <Dropdown.Toggle>Choise type</Dropdown.Toggle>
            <Dropdown.Menu>
                {deviceStore?.types.map(type => 
                    <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>)}
            </Dropdown.Menu>
        </Dropdown>
        <Dropdown className='mt-2 mb-2'>
            <Dropdown.Toggle>Choise brand</Dropdown.Toggle>
            <Dropdown.Menu>
                {deviceStore?.brands.map(brand => 
                    <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>)}
            </Dropdown.Menu>
        </Dropdown>
        <Form.Control className='mt-3' placeholder='Enter name of the device' />
        <Form.Control className='mt-3' placeholder='Enter price of the device' type='number' />
        <Form.Control className='mt-3' type='file' />
        <hr />
        <Button
        variant={'outline-dark'}
        onClick={addInfo}
        >
            Add new device
        </Button>
        {info.map(i => 
            <Row key={i.number} className={'mt-4'}>
                <Col md={4}>
                    <Form.Control placeholder='Enter a property name' />
                </Col>
                <Col md={4}>
                    <Form.Control placeholder='Enter a property description' />
                </Col>
                <Col md={4}>
                    <Button onClick={() => removeInfo(i.number)} variant={'outline-danger'}>Delete</Button>
                </Col>
            </Row>)}
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant={"outline-danger"}
          onClick={onHide}
        >
          Close
        </Button>
        <Button
          variant={"outline-success"}
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
