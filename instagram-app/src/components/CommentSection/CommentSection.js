import React from "react";
const CommentSection = (props) => {
    console.log(props)
    const data = props.commentsArr;
  return (
    <div className="comment-container">
      <i />
      {data.map((comment,i)=>{
          return(
        <div className="comment" key={i}>
          <h1 id="userName">{comment.username}</h1>
          <p>{comment.text}</p>
          </div>
          )
      
      })}
      {/*map over comments */}
      <div className="add-comment">
        <input />
        <button />
      </div>
    </div>
  );
};

export default CommentSection;
