import React from "react";
import "./CommentsSection.scss";
import Comment from "../../Components/Comment/Comment";

const CommentsSection = ({ playlist }) => {
  console.log("playlist", playlist);
  return (
    <section className="comments-section">
      {playlist &&
        playlist?.comments?.length > 0 &&
        playlist.comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      ;
    </section>
  );
};

export default CommentsSection;
