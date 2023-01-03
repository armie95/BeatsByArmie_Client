import React from "react";
import "./NewCommentForm.scss";
import snoop from "../../assets/logos/xXX.jpg";

const NewCommentForm = ({ addComment, comment, setComment }) => {
  return (
    <div className="new-comment-form">
      <div className="new-comment-form__row">
        <div className="new-comment-form__left-col">
          <img
            src={snoop}
            alt="Profile Avatar"
            className="new-comment-form__user-img"
          />
        </div>
        <div className="new-comment-form__right-col">
          <div className="new-comment-form__input-group">
            <label htmlFor="new-comment" className="new-comment-form__label">
              Join the conversation
            </label>
            <textarea
              placeholder=""
              name="new-comment"
              onChange={(e) => setComment(e.target.value)}
              value={comment}
              id="new-comment"
              className="new-comment-form__input"
            ></textarea>
          </div>
          <button
            onClick={addComment}
            className="new-comment-form__submit-btn"
            type="submit"
          >
            Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewCommentForm;
