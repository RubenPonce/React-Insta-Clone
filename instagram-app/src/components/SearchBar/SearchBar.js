import React from 'react'
import { Input, Button } from 'reactstrap'
import './SearchBar.css'
const SearchBar = (props)=>{

    return(
        <div className="heading">
        <i className="fab fa-instagram fa-3x"></i>
        <div id="bar">|</div>
        <h1>ℑ𝔫𝔰𝔱𝔞𝔤𝔯𝔞𝔪</h1>
        <form onSubmit={props.searchUserName}>
        
        <Input type="text" onChange={props.handleSearchInput} placeholder="search..."></Input>
        </form>
        <Button onClick={props.loginLogout}> logout</Button>
        </div>
    )
}
export default SearchBar;