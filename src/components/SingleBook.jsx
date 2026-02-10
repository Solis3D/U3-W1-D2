import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const SingleBook = function (props) {
  const handleClick = function () {
    props.onSelect(props.book.asin);
  };

  const isSelected = props.selectedAsin === props.book.asin;

  return (
    <Col xs="auto" className=" d-flex flex-column">
      <Card className={`h-100 single-book ${isSelected ? "selected-book" : ""}`} style={{ width: "14rem" }} onClick={handleClick}>
        <Card.Img variant="top" src={props.book.img} style={{ height: "300px" }} />
        <Card.Body className=" d-flex flex-column justify-content-between">
          <Card.Title>{props.book.title}</Card.Title>
          <Card.Text className=" align-self-end">{props.book.price}€</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

// class SingleBook extends Component {
//   handleClick = () => {
//     this.props.onSelect(this.props.book.asin);
//   };

//   render() {
//     const isSelected = this.props.selectedAsin === this.props.book.asin;
//     return (
//       <Col xs="auto" className=" d-flex flex-column">
//         <Card className={`h-100 single-book ${isSelected ? "selected-book" : ""}`} style={{ width: "14rem" }} onClick={this.handleClick}>
//           <Card.Img variant="top" src={this.props.book.img} style={{ height: "300px" }} />
//           <Card.Body className=" d-flex flex-column justify-content-between">
//             <Card.Title>{this.props.book.title}</Card.Title>
//             <Card.Text className=" align-self-end">{this.props.book.price}€</Card.Text>
//           </Card.Body>
//         </Card>
//       </Col>
//     );
//   }
// }

export default SingleBook;
