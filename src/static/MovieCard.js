import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../styles/movieCard.css";


const MovieCard = ({ movie, listState, removeFavorite }) => {
  const buttonRender = () => {
    if (listState == undefined) {
      return <p></p>;
    } else if (listState.length > 0) {
      for (let i = 0; i < listState.length; i++) {
        if (listState[i].id.includes(movie.id)) {
          return (
            <Button
              onClick={(movie) => removeFavorite(movie)}
              className="card-button"
            >
              Remove
            </Button>
          );
        }
      }
    } else {
      return <p></p>;
    }
  };
  return (
    <Card className="card-container" style={{ width: "18rem" }}>
      <Card.Img className="card-image" variant="top" src={movie.image} />
      <Card.Body className="card-body">
        <Card.Title>{movie.title}</Card.Title>
        {buttonRender()}
      </Card.Body>
    </Card>
  );
};


export default MovieCard;
