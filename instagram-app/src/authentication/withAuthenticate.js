import React from 'react';
import PostsPage from "../components/PostContainer/PostsPage"
import LoginPage from '../components/Login/LoginPage'

const withAuthenticate = Page =>
  class extends React.Component {
    constructor(props){
      super(props);
      console.log(props)
    }
    render() {
      return <Page login={this.props.login}/>
      
    }
  };

export default withAuthenticate;