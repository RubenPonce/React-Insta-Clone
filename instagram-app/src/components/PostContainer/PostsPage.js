import React from "react";
import PostContainer from "./PostContainer";
import SearchBar from "../SearchBar/SearchBar";
import dummyData from "../../dummy-data";
import LoginPage from '../Login/LoginPage'
class PostsPage extends React.Component{
    constructor(){
        super();
        this.state = {
          data: []
        }
        
      }
      componentDidMount(){
        this.setState({
          data: dummyData,
        })
      }
    
    
    searchUserName= (e)=>{
      e.preventDefault();
      if(this.state.data.length > 1){
        this.setState({
          data: this.state.data.filter(data=>data.username.includes(this.state.searchInput))
          })
      } else{
        this.setState({
          data: dummyData
        })
      }
      
        
      
    }
          
     
    handleSearchInput= (e)=>{
      this.setState({
        searchInput: e.target.value,
      })
    }
    render(){ 
   
        return (
      
          <div className="App">
            <SearchBar  searchUserName={this.searchUserName} handleSearchInput={this.handleSearchInput} />
            <div className="post-collection">
              {this.state.data.map(post => {
                return <PostContainer postData={post} key={post.id}  />;
              })}
            </div>
          </div>
        )
    };
}



export default PostsPage
