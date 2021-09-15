import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <div className="nav-top">
        <div className="nav-top-name">
          <i className="fab fa-react"></i>
          <span>EAX Enterprises GmbH</span>  
        </div>
        <NbarList />
    </div>
  );

};

const NbarList = () => {

  return (
    <div className="nav-top-list">
      <span><Link to="/">Home</Link></span>
      <span><Link to="/about">Mypage</Link></span>
      <span><Link to="/dashboard">Dashboard</Link></span>
    </div>
  );

}

const SimpleList = () => {

  let [sucktext, assign_sucktext] = useState ('Flip');
  let suckcount = true;

  return (
    <div className="list">
        <h3>Click this image to check data binding <img src={logo} width={30} alt="Logo" onClick={ ()=>{ suckcount = !suckcount; assign_sucktext((suckcount)? 'Flip':'Flop'); }}/> {sucktext}</h3>
        <p class="semi-text">test man</p>
        <hr/>
    </div>
  );

};

const Maintext = () => {

  let [testval, testval_change] = useState("'Watch your language'");

  return (
    <div className="maintext">
      <ul>
        <li>This is a sample message</li>
        <p className="talkbox">
        javscript:alert ({testval});
        </p>
        <br />
        <li>And also a sample message</li>
        <li>Triple Check!</li>
        <li>And Four!</li>
      </ul>
      
    </div>
  );

}

const About = () => {

  return (
    <div>I am about</div>
  );

};

const Dashboard = () => {

  return (
    <div>I am Dashboard</div>
  );

};

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/">
        <SimpleList />
        <Maintext />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
    </div>
  );
}

export default App;
