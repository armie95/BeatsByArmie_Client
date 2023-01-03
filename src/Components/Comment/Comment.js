import React from "react";
import "./Comment.scss";

const userImage =
  "https://st3.depositphotos.com/9998432/13335/v/600/depositphotos_133352010-stock-illustration-default-placeholder-man-and-woman.jpg";

const Comment = ({ comment }) => {
  const timeStampToDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString();
  };
  return (
    <div className="comment">
      <div className="comment__left-col">
        <img src={userImage} alt="" className="comment__user-img" />
      </div>
      <div className="comment__right-col">
        <div className="comment__row">
          <h4 className="comment__user-name">{comment.name}</h4>
          <p className="comment__date">{timeStampToDate(comment.timestamp)}</p>
        </div>
        <div className="comment__row">
          <p className="comment__text">{comment.comment}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
