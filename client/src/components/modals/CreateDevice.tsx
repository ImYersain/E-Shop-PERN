import React, { FC, useEffect, useContext, useState } from "react";
import { Form, Dropdown, Col, Row } from "react-bootstrap";
import { Context, IContextProviderProps } from "../../index";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { fetchTypes, fetchBrands } from "../../api/deviceAPI";
import { observer } from "mobx-react-lite";
import { createDevice } from './../../api/deviceAPI';

interface IPropsCreateDevice {
  show?: boolean;
  onHide?: () => void;
}
interface IInfo {
  title?: string;
  description?: string;
  number?: number | undefined;
}

export const CreateDevice: FC<IPropsCreateDevice> = observer(({ show, onHide }) => {
    const context = useContext<IContextProviderProps | null>(Context);
    const deviceStore = context?.device;

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState<any>(null);
    const [info, setInfo] = useState<Array<IInfo>>([]);

    useEffect(() => {
      fetchTypes().then((data) => deviceStore?.setTypes(data));
      fetchBrands().then((data) => deviceStore?.setBrands(data));
    }, []);

    const addInfo = () => {
      setInfo([...info, { title: "", description: "", number: Date.now() }]);
    };
    const removeInfo = (number: number | undefined) => {
      setInfo(info.filter((item) => item.number !== number));
    };
    const changeInfo = (key: string, value: string, number: number | undefined) => {
      setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    };

    const selectFile = (e: any) => {
      setFile(e.target.files[0]);
    };

    const addDevice = () => {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('price', `${price}`);
      formData.append('info', JSON.stringify(info));  //массив конвертирую в джейсон строку
      formData.append('img', file);
      formData.append('brandId', `${deviceStore?.selectedBrand.id}`);
      formData.append('typeId', `${deviceStore?.selectedType.id}`);

      createDevice(formData).then(data => {
        if(onHide) onHide()
      });
      console.log(info)
    }

    return (
      <Modal size="lg" centered onHide={onHide} show={show}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add new device
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>
              {deviceStore?.selectedType.name || "Choise type"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {deviceStore?.types.map((type) => (
                <Dropdown.Item
                  onClick={() => deviceStore.setSelectedType(type)}
                  key={type.id}
                >
                  {type.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>
              {deviceStore?.selectedBrand.name || "Choise brand"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {deviceStore?.brands.map((brand) => (
                <Dropdown.Item
                  onClick={() => deviceStore.setSelectedBrand(brand)}
                  key={brand.id}
                >
                  {brand.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            className="mt-3"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name of the device"
          />
          <Form.Control
            className="mt-3"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            placeholder="Enter price of the device"
            type="number"
          />
          <Form.Control
            className="mt-3"
            onChange={selectFile}
            type="file"
          />
          <hr />
          <Button variant={"outline-dark"} onClick={addInfo}>
            Add new characteristic
          </Button>
          {info.map((i) => (
            <Row key={i.number} className={"mt-4"}>
              <Col md={4}>
                <Form.Control value={i.title} onChange={(e) => changeInfo('title', e.target.value, i.number)} placeholder="Enter a property name" />
              </Col>
              <Col md={4}>
                <Form.Control value={i.description} onChange={(e) => changeInfo('description', e.target.value, i.number)} placeholder="Enter a property description" />
              </Col>
              <Col md={4}>
                <Button
                  onClick={() => removeInfo(i.number)}
                  variant={"outline-danger"}
                >
                  Delete
                </Button>
              </Col>
            </Row>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant={"outline-danger"} onClick={onHide}>
            Close
          </Button>
          <Button
            variant={"outline-success"}
            onClick={() => {
              addDevice()
            }}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    );
});
