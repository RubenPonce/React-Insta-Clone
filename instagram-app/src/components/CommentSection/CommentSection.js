import React from "react";
import "./CommentSection.css";
class CommentSection extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            comments: props.commentsArr,
            commenter: {
            text: '',
            username: 'tester',
            },
            likes: props.likes,
            likeStyle: null,
            likeClicked: false,
        

        }
       
    }
    
addNewComment = (e)=>{
    e.preventDefault();
    this.setState({
        comments: this.state.comments.concat(this.state.commenter)
    })
}



handleChange = (e)=>{


    this.setState({
        commenter: {
            ...this.state.commenter,
            text: e.target.value,
        }, 
    })

}

addLike = ()=>{
    this.setState({
        likeClicked: !this.state.likeClicked
    })

    if(this.state.likeClicked){
        this.setState({
            likes: this.state.likes+1,
            likeClicked: false
        })
    } else{
        this.setState({
            likes: this.props.likes
        })
    }
        
}

  render(){return (
    <div className="comment-container">
    <div className="icons">
      <i onClick={this.addLike} className={this.state.likeClicked ? "like-style far fa-heart fa-2x": "far fa-heart fa-2x"}> </i>
      <i className="far fa-comment fa-2x"></i>
      </div>
      <h1>{this.state.likes} likes</h1>


      {this.state.comments.map((comment,i)=>{
          return(
        <div className="comment" key={i}>
          <h1 className="userName">{comment.username}</h1>
          <p>{comment.text}</p>
          </div>
          )  
      })}
      <div className="add-comment">
      <form onSubmit={this.addNewComment}>
        <input placeholder="Add comment..." onChange={this.handleChange} />
        <button >...</button>
        </form>
      </div>
    </div>
  )};
};

export default CommentSection;
