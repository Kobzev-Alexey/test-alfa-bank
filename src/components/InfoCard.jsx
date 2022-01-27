import React from "react";
import { Card } from "react-bootstrap";

export const InfoCard = ({ author, urlToImage, content, like, doLike, deletNews }) => (

  <Card style={{ width: "18rem" }} className="mt-2">
    <Card.Img variant="top" src={urlToImage} className="img-fluid" />
    <Card.Body>
      <Card.Title>{author}</Card.Title>
      <Card.Text>
        {content}
      </Card.Text>
    </Card.Body>
    <Card.Body className='d-flex justify-content-between'>
      <div onClick={doLike} >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={like ? 'red' : 'black'} className="bi bi-heart-fill" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
        </svg>
      </div>
      <div onClick={deletNews}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </div>
    </Card.Body>
  </Card>
)

