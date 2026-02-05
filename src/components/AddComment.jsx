import { Component } from "react";
import { Form } from "react-bootstrap";

const commentsURL = "https://striveschool-api.herokuapp.com/api/comments/";

class AddComment extends Component {
  state = {
    newComment: {
      comment: "",
      rate: "",
      elementId: "",
    },
  };

  postComments = () => {
    fetch(commentsURL, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTg0YTY0MTgwMjA2ODAwMTUwNGRjNzYiLCJpYXQiOjE3NzAzMDA5OTMsImV4cCI6MTc3MTUxMDU5M30.bN9O8Ppdw0c6QuZgsUavdRArUuZxBMJ09XAchNn9dls",
      },
      method: "POST",
      body: JSON.stringify(this.state.newComment),
    })
      .then((response) => {
        if (response.ok) {
          alert("Recensione Aggiunta!");
        } else {
          throw new Error("Errore nella POST");
        }
      })
      .catch((err) => {
        console.log("Errore", err);
      });
  };

  render() {
    return (
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Inserisci Commento</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={this.state.newComment.comment}
              onChange={(e) => {
                e.preventDefault();
                this.postComments();
              }}
            />
          </Form.Group>
          <Form.Select aria-label="Default select example">
            <option value="">Rate</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Select>
        </Form>
      </div>
    );
  }
}

export default AddComment;
