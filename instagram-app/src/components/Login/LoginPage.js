import React from "react";
import "./Login.css";
import { Button, Form, Input, Jumbotron } from "reactstrap";
const LoginPage = props => {
  return (
    <div className="login-container">
      <Jumbotron>
        <h1>Login for ℑ𝔫𝔰𝔱𝔞𝔤𝔯𝔞𝔪 stuff</h1>
      </Jumbotron>
      <Form className="login-form" onSubmit={props.login}>
        <Input type="text" placeholder="Username" required name="user" />
        <Button color="primary" type="submit">
          LOGIN
        </Button>{" "}
        {/*change login state on click*/}
      </Form>
    </div>
  );
};

export default LoginPage;
