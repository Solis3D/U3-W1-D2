import { Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

const MyLibrary = function (props) {
  return (
    <Row className=" justify-content-center g-2 gap-3 my-5">
      {props.books.map((libro) => {
        return <SingleBook key={libro.asin} book={libro} />;
      })}
    </Row>
  );
};

export default MyLibrary;
