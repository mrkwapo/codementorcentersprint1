import React, { Component } from 'react';  //add componets 
import AllUsers from './components/AllUsers';
import UserInfo from './components/UserInfo';
import UserRegistration from './components/UserRegistration';
import User from './components/User';
import NavBar from './components/NavBar';
import axios from 'axios';
import Searchbar from './components/Searchbar';
import Header from './components/Header';
import Logo from './img/cmcphotoicon.png';
import Credits from './components/Credits';
import Review from './components/Review';
import Photo from './img/cmcphoto.jpg';

class App extends Component {

state = {
  pageView: ""
}

render(){
  return (

<div id="app">
<Header/>
<NavBar />
<br/>
<br/>
<Searchbar/>

      



   





</div>

  
);
}
}
export default App;
