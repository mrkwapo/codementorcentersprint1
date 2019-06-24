import React, { Component } from 'react'

export default class Searchbar extends Component {
  render() {
    return (
<div>
<br/>
<br/>
    <p>Search for a mentor or mentee by computer language, software, framework, etc:</p>
    <br/>
    <div className="search-bar">
        <input type="text" name="search" value="" autocomplete="off" id="myinput" onkeyup="searchFunction()" placeholder="Search"/>

    </div>

    <ul id="wrapper">
        <li>
            <a href="#"> Javascript</a>
        </li>
        <li>
            <a href="#"> HTML</a>
        </li>
        <li>
            <a href="#"> CSS</a>
        </li>
        <li>
            <a href="#"> C</a>
        </li>
        <li>
            <a href="#"> Python</a>
        </li>
        <li>
            <a href="#"> SQL</a>
        </li>
        <li>
            <a href="#"> Java</a>
        </li>
        <li>
            <a href="#"> PHP</a>
        </li>
        <li>
            <a href="#"> Node JS</a>
        </li>
        <li>
            <a href="#"> MongoDB</a>
        </li>
        <li>
            <a href="#"> Express</a>
        </li>
        <li>
            <a href="#"> Ruby</a>
        </li>
        <li>
            <a href="#"> C+</a>
        </li>
        <li>
            <a href="#"> Ios</a>
        </li>
    </ul>  
  
 
</div>
        )
    }
  }