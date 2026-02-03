import { Container, Row, Col } from "react-bootstrap";

const MyFooter = function (props) {
  return (
    <Container className="bg-dark-subtle text-center mt-5 py-4" fluid={true}>
      <div>
        <h5>{props.text}</h5>
      </div>
    </Container>
  );
};

export default MyFooter;
