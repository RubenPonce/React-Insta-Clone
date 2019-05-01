import React from "react";
import "./App.css";
import withAuthenticate from './authentication/withAuthenticate'
import LoginPage from './components/Login/LoginPage'
import PostsPage from './components/PostContainer/PostsPage'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      loggedIn: false,
    }
    
  }
  

  login = (e)=>{
    console.log(e.target)
    this.setState({
      loggedIn: !this.state.loggedIn
    })
  }

 render(){ 
  if(!this.state.loggedIn){
    let ComponentFromWithAuthenticate = withAuthenticate(LoginPage);
    return <ComponentFromWithAuthenticate login={this.login}/>
  }else{
    let ComponentFromWithAuthenticate = withAuthenticate(PostsPage);
    return <ComponentFromWithAuthenticate login={this.login}/>
  }
  

  };
}



export default App;

