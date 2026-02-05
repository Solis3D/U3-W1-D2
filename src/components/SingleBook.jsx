import { Col } from "react-bootstrap";
import { Component } from "react";
import Card from "react-bootstrap/Card";
import CommentArea from "./CommentArea";

// const SingleBook = function (props) {
//   return (
//     <Col key={props.book.asin} xs="auto">
//       <Card className=" h-100" style={{ width: "14rem" }}>
//         <Card.Img variant="top" src={props.book.img} style={{ height: "300px" }} />
//         <Card.Body className=" d-flex flex-column justify-content-between">
//           <Card.Title>{props.book.title}]</Card.Title>
//           <Card.Text className=" align-self-end">{props.book.price}€</Card.Text>
//         </Card.Body>
//       </Card>
//     </Col>
//   );
// };

class SingleBook extends Component {
  state = {
    selected: false,
  };

  toggleSelected = () => {
    this.setState((prevState) => ({
      selected: !prevState.selected,
    }));
  };

  render() {
    return (
      <Col xs="auto" className=" d-flex flex-column align-content-center">
        <Card className={`h-100 single-book ${this.state.selected ? "selected-book" : ""}`} style={{ width: "14rem" }} onClick={this.toggleSelected}>
          <Card.Img variant="top" src={this.props.book.img} style={{ height: "300px" }} />
          <Card.Body className=" d-flex flex-column justify-content-between">
            <Card.Title>{this.props.book.title}</Card.Title>
            <Card.Text className=" align-self-end">{this.props.book.price}€</Card.Text>
          </Card.Body>
        </Card>
        {this.state.selected && <CommentArea bookAsin={this.props.book.asin} />}
      </Col>
    );
  }
}

export default SingleBook;
