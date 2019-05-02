import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";
import "./PostContainer.css";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";
const PostContainer = props => {
  const data = props.postData;
  return (
    <Card className="post-content">
      <CardTitle className="post-header">
        <img src={data.thumbnailUrl} className="thumbnail" />
        <h6>{data.username}</h6>
      </CardTitle>
      <CardImg src={data.imageUrl} />
      <CardBody>
        <CommentSection commentsArr={data.comments} likes={data.likes} />
      </CardBody>
    </Card>
  );
};

PostContainer.propTypes = {
  postData: PropTypes.shape({
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired
  })
};

export default PostContainer;
