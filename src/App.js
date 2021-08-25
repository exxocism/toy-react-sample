import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  let [testval, testval_change] = useState('you suCK');
  let [sucktext, assign_sucktext] = useState ('굿');
  let suckcount = true;

  return (
    <div className="App">
      <div className="nav-top">
        <div>EAX Enterprises GmbH</div>  
      </div>
      <div className="list">
        <h3>yousuck <img src={logo} width={30} alt="Logo" onClick={ ()=>{ suckcount = !suckcount; assign_sucktext((suckcount)? '굿':'노굿'); }}/> {sucktext}</h3>
        <p class="semi-text">test man</p>
        <hr/>
      </div>
      <div className="maintext">
        <ul>
          <li>This is a sample message</li>
        </ul>
        <p className="talkbox">
          function ({testval});
        </p>
      </div>  
    </div>
  );
}

export default App;
