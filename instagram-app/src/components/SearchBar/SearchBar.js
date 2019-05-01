import React from 'react'


const SearchBar = (props)=>{
console.log(props)
    return(
        <form onSubmit={props.searchUserName}>
        <input type="text" onChange={props.handleSearchInput} placeholder="search..."></input>
        </form>
    )
}
export default SearchBar;