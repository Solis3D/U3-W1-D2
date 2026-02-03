import { Container, Alert } from "react-bootstrap";

const MyAlert = function () {
  return (
    <Container className="flex-grow-1 my-4">
      <Alert variant="dark" className="text-center">
        <Alert.Heading className="fs-1">EpiLibrary</Alert.Heading>
        <hr />
        <h3 className="mb-0 fs-3">La libreria più interessante del mondo!</h3>
      </Alert>
    </Container>
  );
};

export default MyAlert;
