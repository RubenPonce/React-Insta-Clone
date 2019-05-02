import React from "react";
import PostsPage from "../components/PostContainer/PostsPage";
import LoginPage from "../components/Login/LoginPage";

const withAuthenticate = FirstComp => SecondComp =>
  class extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      if (localStorage.getItem('user')) {
        return <FirstComp login={this.props.loginLogout} />;
      } else {
        return (
          <SecondComp
            login={this.props.loginLogout}
            
          />
        );
      }
    }
  };

export default withAuthenticate;
