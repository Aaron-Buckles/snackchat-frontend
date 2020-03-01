import React from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button"
import userService from "../../services/userService"
import reviewService from "../../services/reviewService"
import "holderjs";
import { useEffect, useState } from "react";

import { useAuth } from "../../customHooks/use-auth"

function Thumbnail(props) {

  const auth = useAuth();

  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(props.review.likeCount)

  useEffect(() => {
    const fetchData = async () => {

      if (props.review.likes.includes(auth.user.userId)) {
        setLiked(true)
      } else {
        setLiked(false)
      }
    };
    if (auth.user) {
       fetchData();
    }
  }, []);


  const onLike = async e => {
    e.preventDefault();
    try {
      await reviewService.likeReview(props.review._id);
      
      setLiked(true)
      setLikeCount(likeCount + 1)

    } catch (err) {
      console.log(err);
      props.history.push("/login")
    }
  };

  const onUnlike = async e => {
    e.preventDefault();
    try {
      await reviewService.unlikeReview(props.review._id);

      setLiked(false)
      setLikeCount(likeCount - 1)

    } catch (err) {
      console.log(err);
      props.history.push("/login")
    }
  };

  return (
    <Card className="mx-auto">
      <Card.Img variant="top" src={`${process.env.REACT_APP_API_URL}/${props.review.reviewImage}`} />
      <Card.Body>
        <Card.Title>{props.review.title}</Card.Title>
        <Card.Text>{props.review.description}</Card.Text>
        <h5>
          {props.review.tags.map(tag => (
            <Badge key={tag._id} pill variant="primary" className="m-1">
              {tag.name}
            </Badge>
          ))}
        </h5>
        <div>
          Rating: {props.review.starRating}
        </div>
        <div>
          <span>{likeCount} likes</span>
          <span>
            {liked ? <Button variant="primary" onClick={onUnlike}>Unlike</Button> : <Button variant="primary" onClick={onLike}>Like</Button>}
          </span>
        </div>
      </Card.Body>
    </Card>
  );

}

export default Thumbnail;
