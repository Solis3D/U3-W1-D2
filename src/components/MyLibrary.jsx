import { Row, Col } from "react-bootstrap";
import libreria from "../data/horror.json";
import Card from "react-bootstrap/Card";

const MyLibrary = function () {
  return (
    <Row className=" justify-content-center g-2 gap-3 my-5">
      {libreria.map((libro) => {
        return (
          <Col key={libro.asin} xs="auto">
            <Card className=" h-100" style={{ width: "14rem" }}>
              <Card.Img variant="top" src={libro.img} style={{ height: "300px" }} />
              <Card.Body className=" d-flex flex-column justify-content-between">
                <Card.Title>{libro.title}]</Card.Title>
                <Card.Text className=" align-self-end">{libro.price}€</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default MyLibrary;
