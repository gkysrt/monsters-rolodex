import React from 'react';
import './search-box.styles.css';


export const SearchBox = ({placeholder, onChange, value, name}) => 
    <input 
        placeholder = {placeholder}
        className = 'searchBox'
        type = 'text'
        onChange = {onChange}
        value = {value}
        name = {name}
    />