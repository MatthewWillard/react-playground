import React, { Component } from 'react';
import './App.css';
//import Counter from './state/Counter';
//import Messages from './Messages';
//import TheDate from './state/TheDate';
//import HelloWorld from './state-drills/HelloWorld'
//import RouletteGun from './state-drills/RouletteGun'
import Bomb from './state-drills/Bomb'

class App extends Bomb {
  render() {
    return (
      <div className='CountdownBomb'>
      {this.renderDisplay()}
    </div>
      
    )
  }
}


export default App;