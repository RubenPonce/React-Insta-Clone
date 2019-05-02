import React from "react";
import "./CommentSection.css";
import {Button, Input} from 'reactstrap';

class CommentSection extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            comments: props.commentsArr,
            commenter: {
            text: '',
            username: `${localStorage.getItem('user')}`,
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
      <h6 className="like">{this.state.likes} likes</h6>


      {this.state.comments.map((comment,i)=>{
          return(
        <div className="comment" key={i}>
          <h6 className="userName">{comment.username}</h6>
          <p>{comment.text}</p>
          </div>
          )  
      })}
      <div >
      <form className="add-comment" onSubmit={this.addNewComment}>
        <Input placeholder="Add comment..." onChange={this.handleChange} />
        <Button outline color="primary">POST </Button>
        </form>
      </div>
    </div>
  )};
};

export default CommentSection;
