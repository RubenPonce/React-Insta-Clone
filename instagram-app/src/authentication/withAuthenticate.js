import React from 'react';
import PostsPage from "../components/PostContainer/PostsPage"
import LoginPage from '../components/Login/LoginPage'

const withAuthenticate = FirstComp => SecondComp=>
  class extends React.Component {
    constructor(props){
      super(props);
    }
   
    render() {
      if(this.props.loggedIn){
        
        
       return <FirstComp  login={this.props.loginLogout}/>
      } else{
        console.log(localStorage.getItem('user'))
        
        return <SecondComp  login={this.props.loginLogout} getUserName={this.props.getUserName}/>
      }
      
      
    }
  };

export default withAuthenticate;

