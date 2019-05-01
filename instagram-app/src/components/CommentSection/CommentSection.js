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
            likeStyle: {
                background: 'red'
            },
            likeClicked: false,
        }
    }
    
componentDidMount(){
    console.log('mounted')
}

addNewComment = (e)=>{
    e.preventDefault();
    this.setState({
        comments: [...this.state.comments, this.state.commenter]
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
    

    if(this.state.likeClicked){
        this.setState({
            likes: this.props.likes,
            likeClicked: !this.state.likeClicked
        })
    } else{
        this.setState({
            likes: this.props.likes+1,
            likeClicked: !this.state.likeClicked
        })
    }
        
}



  render(){return (
    <div className="comment-container">
    <div className="icons">
    <span  onClick={this.addLike}>{this.state.likeClicked ? <i className="fas fa-heart fa-2x  like-button"></i> : <i className="far fa-heart fa-2x"></i>} </span>
      <i className="far fa-comment fa-2x"></i>
      </div>
      <h1 className="like">{this.state.likes} likes</h1>


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
