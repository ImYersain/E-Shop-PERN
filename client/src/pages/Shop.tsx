import React, { useContext, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { TypeBar } from "../components/TypeBar";
import { BrandBar } from "../components/BrandBar";
import { DeviceList } from "../components/DeviceList";
import { observer } from "mobx-react-lite";
import { Context, IContextProviderProps } from '../index';
import { fetchTypes, fetchBrands, fetchDevices } from '../api/deviceAPI';

const Shop = observer(() => {
    const context = useContext<IContextProviderProps | null>(Context);
    const deviceStore = context?.device;

  useEffect(() => {
    fetchTypes().then(data => deviceStore?.setTypes(data))
    fetchBrands().then(data => deviceStore?.setBrands(data))
    fetchDevices().then(data => deviceStore?.setDevices(data.rows))
  }, []);

  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <TypeBar />
        </Col>

        <Col md={9}>
          <BrandBar />
          <DeviceList />
        </Col>
      </Row>
    </Container>
  );
});

export default Shop;
