import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';

const PostContainer = (props)=>{
    
    const data = props.postData
    console.log(props)
    return(
        <div className="post-content">
        <div className="userName">
             <img src={data.thumbnailUrl} className="thumbnail"></img>
            <h2>{data.username}</h2>
        </div>
        <img src={data.imageUrl}></img>
       <CommentSection commentsArr={data.comments}/>   
    </div> 
    )
} 

PostContainer.propTypes = {
    postData: PropTypes.shape({
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired
    })
}
    

   
  

export default PostContainer
