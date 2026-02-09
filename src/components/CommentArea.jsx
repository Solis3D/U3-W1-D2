import { Component } from "react";
import { Alert } from "react-bootstrap";
import AddComment from "./AddComment";

const commentsURL = "https://striveschool-api.herokuapp.com/api/comments/";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  //   FUNZIONE FETCH COMMENTI
  getComments = () => {
    if (!this.props.bookAsin) {
      this.setState({ comments: [] });
      return;
    }

    fetch(commentsURL + this.props.bookAsin, {
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
        // let filteredComments = commentsFromDB.filter((comment) => comment.elementId.includes(this.props.bookAsin));
        // console.log("Filtered Comments:", filteredComments);

        this.setState({
          comments: commentsFromDB,
        });
      })
      .catch((err) => {
        console.log("Errore", err);
      });
  };
  //   FINE FUNZIONE FETCH COMMENTI

  componentDidMount() {
    // console.log("PARTE ComponentDidMount");

    this.getComments();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.bookAsin !== this.props.bookAsin) {
      this.getComments();
    }
  }

  render() {
    // console.log("PARTE RENDER");

    return (
      <>
        {!this.props.bookAsin ? (
          <p className="mb-0 text-center fs-4">Seleziona un libro per vedere i commenti.</p>
        ) : (
          <>
            {/* <AddComment /> */}
            {this.state.comments.map((comment) => (
              <Alert variant="light" key={comment._id}>
                <hr />
                <p className="">
                  <strong>Utente:</strong> {comment.author}
                </p>
                <p>{comment.comment}</p>
                <p className=" fw-bold">Rating:{comment.rate}/5</p>
                <hr />
              </Alert>
            ))}
          </>
        )}
      </>
    );
  }
}

export default CommentArea;
