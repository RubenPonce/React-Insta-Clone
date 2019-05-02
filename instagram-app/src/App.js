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
  return(<div className="App">
  <ComponentWithAuthenticate loggedIn={this.state.loggedIn} loginLogout={this.login} />
  </div>)
}
}
const ComponentWithAuthenticate = withAuthenticate(PostsPage)(LoginPage);


export default App;

