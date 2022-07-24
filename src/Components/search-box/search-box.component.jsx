import { Component } from "react";
import './search-box.styles.css';
const SearchBox = ({ className, placeholder, OnchangeHandler }) => (
    <input className={` search-box ${className}`}
        type='search'
        placeholder={placeholder}
        onChange={OnchangeHandler} />

);


export default SearchBox;