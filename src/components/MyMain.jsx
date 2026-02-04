import { Container } from "react-bootstrap";
import MyAlert from "./MyAlert";
import MyLibrary from "./MyLibrary";
import horrorLib from "../data/horror.json";
import fantasyLib from "../data/fantasy.json";
import historyLib from "../data/history.json";
import romanceLib from "../data/romance.json";
import scifiLib from "../data/scifi.json";

const MyMain = function () {
  return (
    <Container fluid={true} className="mt-4">
      <MyAlert />

      <MyLibrary books={fantasyLib} />
    </Container>
  );
};

export default MyMain;
