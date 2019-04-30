import React from "react";
import "./App.css";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";
import dummyData from "./dummy-data";


class App extends React.Component {
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

 render(){ 
   
  return (

    <div className="App">
      <SearchBar />
      <div className="post-collection">
        {this.state.data.map(post => {
          return <PostContainer postData={post} key={post.id} />;
        })}
      </div>
    </div>
  )};
}



export default App;

