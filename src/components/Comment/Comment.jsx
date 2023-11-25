/* eslint-disable react/prop-types */
import "./Comment.css";

export default function Comment(props) {
  const userName = props.userName;
  const comment = props.comment;
  return (
    <div>
      <div className="comment-section">
        <div className="user-dp">
          <div className="dp">User Photo</div>
        </div>
        <div className="comment">
          <div className="userName">
            <h4>{userName}</h4>
          </div>
          <div className="userComment">
            <p>{comment}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
