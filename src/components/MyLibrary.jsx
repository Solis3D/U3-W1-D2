import { Row, Form, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { Component } from "react";
import horrorLib from "../data/horror.json";
import fantasyLib from "../data/fantasy.json";
import historyLib from "../data/history.json";
import romanceLib from "../data/romance.json";
import scifiLib from "../data/scifi.json";
import CommentArea from "./CommentArea";

// const MyLibrary = function (props) {
//   return (
//     <Row className=" justify-content-center g-2 gap-3 my-5">
//       {props.books.map((libro) => {
//         return <SingleBook key={libro.asin} book={libro} />;
//       })}
//     </Row>
//   );
// };

const initialSearch = {
  searchBook: "",
  genre: "horror",
};

class MyLibrary extends Component {
  state = {
    search: initialSearch,
    selectedAsin: null,
  };

  handleSelectBook = (asin) => {
    this.setState({ selectedAsin: asin });
  };

  render() {
    let books;

    switch (this.state.search.genre) {
      case "fantasy":
        books = fantasyLib;
        break;
      case "history":
        books = historyLib;
        break;
      case "romance":
        books = romanceLib;
        break;
      case "sci-fi":
        books = scifiLib;
        break;
      default:
        books = horrorLib;
    }

    const searchedBooks = books.filter((libro) => libro.title.toLowerCase().includes(this.state.search.searchBook.toLowerCase()));
    return (
      <>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="text"
              placeholder="Search..."
              value={this.state.search.searchBook}
              onChange={(e) => {
                // console.log("Search Input:", e.target.value);
                this.setState({
                  search: {
                    ...this.state.search,
                    searchBook: e.target.value,
                  },
                });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Select
              aria-label="Default select example"
              value={this.state.search.genre}
              onChange={(e) => {
                this.setState({
                  search: {
                    ...this.state.search,
                    genre: e.target.value,
                  },
                  selectedAsin: null,
                });
              }}
            >
              <option value="horror">Horror</option>
              <option value="fantasy">Fantasy</option>
              <option value="history">History</option>
              <option value="romance">Romance</option>
              <option value="sci-fi">Sci-Fi</option>
            </Form.Select>
          </Form.Group>
        </Form>

        <Row className=" my-5 px-0 px-md-3">
          <Col className="d-block m-auto" xs={12} lg={8}>
            <Row className="g-2 gap-3 justify-content-center">
              {searchedBooks.map((libro) => {
                return <SingleBook key={libro.asin} book={libro} selectedAsin={this.state.selectedAsin} onSelect={this.handleSelectBook} />;
              })}
            </Row>
          </Col>
          <Col
            xs={0}
            lg={4}
            className="d-md-block bg-dark-subtle overflow-y-auto position-sticky top-0 pt-2 pb-5 pb-lg-0 mt-4 mt-lg-0"
            style={{ maxHeight: "50rem" }}
          >
            <div className="text-center mt-2 mb-4">
              <h2>Recensioni</h2>
            </div>
            <CommentArea bookAsin={this.state.selectedAsin} />
          </Col>
        </Row>
      </>
    );
  }
}

export default MyLibrary;
