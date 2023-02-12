import React,{FC} from "react";
import { useNavigate } from "react-router-dom";
import { Col, Image } from "react-bootstrap";
import { IDevice } from "../store/DeviceStore";
import { Card } from "react-bootstrap";
import star from "../assets/star.png";
import { DEVICE_ROUTE } from '../utils/consts';

interface IDeviceItemProps {
  device: IDevice;
}

export const DeviceItem:FC<IDeviceItemProps> = ({ device }) => {
    const navigate = useNavigate();

  return (
    <Col md="3" className={"mt-3"} onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
      <Card style={{ width: 150, cursor: "pointer" }} border={"light"}>
        <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img} />

        <div className="text-black-50 d-flex justify-content-between align-items-center">
          <div>Samsung</div>
          <div className="d-flex align-items-center mt-1">
            <div>{device.raiting}</div>
            <Image width={18} height={18} src={star} />
          </div>
        </div>

        <div>{device.name}</div>    
      </Card>
    </Col>
  );
};
