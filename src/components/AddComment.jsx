import { Component, use, useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";

const commentsURL = "https://striveschool-api.herokuapp.com/api/comments/";

const AddComment = function (props) {
  const [comment, setComment] = useState("");
  const [rate, setRate] = useState("1");
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    setComment("");
    setRate("1");
  }, [props.bookAsin]);

  const handleSubmit = function (e) {
    e.preventDefault();

    if (!props.bookAsin) return;

    const payload = {
      comment,
      rate: Number(rate),
      elementId: props.bookAsin,
    };

    setIsSending(true);

    fetch(commentsURL, {
      method: "POST",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTg0YTY0MTgwMjA2ODAwMTUwNGRjNzYiLCJpYXQiOjE3NzAzMDA5OTMsImV4cCI6MTc3MTUxMDU5M30.bN9O8Ppdw0c6QuZgsUavdRArUuZxBMJ09XAchNn9dls",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Errore nella POST");
        }
      })
      .then(() => {
        setComment("");

        if (props.onCommentAdded) {
          props.onCommentAdded();
        }
        setIsSending(false);
      })
      .catch((err) => {
        console.log("Errore", err);
        setIsSending(false);
      });
  };
  const disabled = !props.bookAsin || isSending;

  return (
    <Form onSubmit={handleSubmit} className="mb-3">
      <Form.Group className="mb-2">
        <Form.Label>Inserisci Commento</Form.Label>
        <Form.Control as="textarea" rows={3} value={comment} disabled={disabled} onChange={(e) => setComment(e.target.value)} />
      </Form.Group>

      <Form.Select className="mb-2" value={rate} disabled={disabled} onChange={(e) => setRate(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </Form.Select>

      <Button variant="light" type="submit" disabled={disabled || comment.trim().length === 0}>
        {isSending ? "Invio..." : "Aggiungi recensione"}
      </Button>
    </Form>
  );
};

export default AddComment;
