import { Component } from "react";
import { Card } from "react-bootstrap";

const commentsURL = "https://striveschool-api.herokuapp.com/api/comments/";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  //   FUNZIONE FETCH COMMENTI
  getComments = () => {
    fetch(commentsURL, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTg0YTY0MTgwMjA2ODAwMTUwNGRjNzYiLCJpYXQiOjE3NzAzMDA5OTMsImV4cCI6MTc3MTUxMDU5M30.bN9O8Ppdw0c6QuZgsUavdRArUuZxBMJ09XAchNn9dls",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore recupero commenti");
        }
      })
      .then((commentsFromDB) => {
        // console.log("Commenti ricevuti", commentsFromDB);
        let filteredComments = commentsFromDB.filter((comment) => comment.elementId.includes(this.props.bookAsin));
        console.log("Filtered Comments:", filteredComments);

        this.setState({
          comments: filteredComments,
        });
      })
      .catch((err) => {
        console.log("Errore", err);
      });
  };
  //   FINE FUNZIONE FETCH COMMENTI

  componentDidMount() {
    console.log("PARTE ComponentDidMount");

    this.getComments();
  }

  render() {
    // console.log("PARTE RENDER");

    return (
      <Card className="my-2 overflow-y-auto" style={{ width: "14rem", maxHeight: "200px" }}>
        <Card.Body>
          {this.state.comments.map((comment) => (
            <div key={comment._id}>
              <hr />
              <p className=" text-decoration-underline">{comment.author}</p>
              <p>{comment.comment}</p>
              <p className=" fw-bold">Rating:{comment.rate}/5</p>
              <hr />
            </div>
          ))}
        </Card.Body>
      </Card>
    );
  }
}

export default CommentArea;
