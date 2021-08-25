import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  let [testval, testval_change] = useState("'Watch your language'");
  let [sucktext, assign_sucktext] = useState ('Flip');
  let suckcount = true;

  return (
    <div className="App">
      <div className="nav-top">
        <div>EAX Enterprises GmbH</div>  
      </div>
      <div className="list">
        <h3>Click this image to check data binding <img src={logo} width={30} alt="Logo" onClick={ ()=>{ suckcount = !suckcount; assign_sucktext((suckcount)? 'Flip':'Flop'); }}/> {sucktext}</h3>
        <p class="semi-text">test man</p>
        <hr/>
      </div>
      <div className="maintext">
        <ul>
          <li>This is a sample message</li>
        </ul>
        <p className="talkbox">
          javscript:alert ({testval});
        </p>
      </div>  
    </div>
  );
}

export default App;
