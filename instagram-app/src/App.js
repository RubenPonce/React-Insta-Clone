import React from "react";
import "./App.css";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";
import dummyData from "./dummy-data";


function App() {
  console.log(dummyData)
  return (

    <div className="App">
      <SearchBar />
      <div className="post-collection">
        {dummyData.map(post => {
          return <PostContainer postData={post} key={post.id} />;
        })}
      </div>
    </div>
  );
}



export default App;

