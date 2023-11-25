import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Comment from "../Comment/Comment";
import "./Comment_box.css";

export default function Comment_box() {
  const [comments, setComments] = useState([]);
  const [userName, setUserName] = useState("");
  const [comment, setComment] = useState("");
  const id = uuidv4();

  const saveData = () => {
    localStorage.setItem("userName", { userName });
    localStorage.setItem("comment", { comment });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const commentObj = {
      userName,
      comment,
      id,
    };

    if (commentObj.userName.trim() === "" || commentObj.comment.trim() === "")
      return alert("Fields can't be empty!");

    setUserName(commentObj.userName);
    setComment(commentObj.comment);
    setComments([...comments, commentObj]);

    if (comments) {
      setUserName("");
      setComment("");
    }
  };

  saveData();

  return (
    <div className="wrap">
      <div className="comment-wrap">
        <h1>Write a comment</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="nameInput">User Name: </label>
          <input
            type="text"
            name="nameInput"
            placeholder="write your user name"
            autoComplete="off"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <br />
          <br />
          <label name="comment">Comment</label>
          <textarea
            name="comment"
            rows="6"
            cols="50"
            maxLength={800}
            placeholder="Write your comment here. (Max: 800 Character)"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <br />
          <br />
          <button type="submit">Add Comment</button>
        </form>
        {comments.map((singleComment) => (
          <Comment
            userName={singleComment.userName}
            comment={singleComment.comment}
            key={singleComment.id}
          />
        ))}
      </div>
    </div>
  );
}
