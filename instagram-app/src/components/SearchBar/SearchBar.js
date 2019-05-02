import React from 'react'
import { Input, Button } from 'reactstrap'
import './SearchBar.css'
const SearchBar = (props)=>{
    console.log(props)

    return(
        <div className="heading">
        <form onSubmit={props.searchUserName}>
        <Input type="text" onChange={props.handleSearchInput} placeholder="search..."></Input>
        </form>
        <Button onClick={props.loginLogout}> logout</Button>
        </div>
    )
}
export default SearchBar;