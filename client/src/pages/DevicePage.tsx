import React from "react";
import { Col, Container, Image, Row, Card, Button } from "react-bootstrap";
import bigStar from "../assets/bigStar.png";

const DevicePage = () => {
  const device = {
    id: 5,
    name: "Iphone 13",
    price: 1000,
    raiting: 5,
    img:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch-green?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1656712887888",
  };
  const description = [
      {id:1, title: 'RAM', description: '128gb'},
      {id:2, title: 'ROM', description: '4gb'},
      {id:3, title: 'Processor', description: 'A15 Bionic'},
      {id:4, title: 'OS', description: 'IOS 15'},
      {id:5, title: 'Camera', description: '12 + 12 Mpx'},
  ]

  return (
    <Container className={"mt-3"}>
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={device.img} />
        </Col>
        <Col md={4}>
          <Row className={"d-flex flex-column align-items-center"}>
            <h2>{device.name}</h2>
            <div
              className={"d-flex justify-content-center align-items-center"}
              style={{
                background: `url(${bigStar}) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: "cover",
                fontSize: 54,
              }}
            >
              {device.raiting}
            </div>
          </Row>
        </Col>
        <Col md={4}>
            <Card className={'d-flex flex-column align-items-center justify-content-around'}
            style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}>
            <h3>from: {device.price} $</h3>
            <Button variant={'outline-dark'}>Add to cart</Button>
            </Card>
        </Col>
      </Row>
      <Row className={'d-flex flex-column m-3'}>
          <h1>Characteristics</h1>
          {description.map((info, index) => 
            <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding:10}}>
                {info.title}: {info.description}
            </Row>)}
      </Row>
    </Container>
  );
};

export default DevicePage;
