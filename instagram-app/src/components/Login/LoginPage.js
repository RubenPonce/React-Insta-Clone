import React from 'react';
import './Login.css'
import { Button, Form, Input, Jumbotron} from 'reactstrap';
const LoginPage = (props)=>{
    return(
        <div className="login-container">
        <Jumbotron>
            <h1>Login for Instagram stuff</h1>
        </Jumbotron>
        <Form className="login-form" onSubmit={preventDefault}>
            <Input type="email" placeholder="Mobile Number or Email"></Input>
            <Input placeholder="Full Name" ></Input>
            <Input placeholder="Username" required></Input>
            <Input placeholder="Password"></Input>
            <Button color="primary" onClick={props.login}>LOGIN</Button> {/*change login state on click*/}
        </Form>
        
        </div>
    )
}
const handleInput = (e)=>{
    window.localStorage.setItem('userName',e.target.value)
}
const preventDefault=(e)=>{
e.preventDefault();
}
export default LoginPage;