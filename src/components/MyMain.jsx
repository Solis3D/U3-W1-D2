import { Container } from "react-bootstrap";
import MyAlert from "./MyAlert";
import MyLibrary from "./MyLibrary";

const MyMain = function () {
  return (
    <Container fluid={true} className="mt-4">
      <MyAlert />

      <MyLibrary />
    </Container>
  );
};

export default MyMain;
