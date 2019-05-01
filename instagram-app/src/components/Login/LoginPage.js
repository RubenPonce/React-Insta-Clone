import React from 'react';
import './Login.css'
const LoginPage = (props)=>{
    console.log(props)
    return(
        <div className="login-container">
        <h1>Login for cool instagram stuff</h1>
        <button onClick={props.login}>LOGIN</button> {/*change login state on click*/}
        </div>
    )
}
export default LoginPage;