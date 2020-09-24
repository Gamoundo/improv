import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

let situations = ["shark attack", "stubbed toe", "totaled boss's car", "vengeful ghost", "caught committing crime", "It is M-fing Monday!", "Surrounded by clowns", "World ends in a hour", "Witnessed an alien abduction", "Ran out of goldfish", "trapped with a shapehifter", "Out of coffee"]
let help = ["graham crackers", "interpretive dance", "diplomacy", "hidden bobby pin", "smoke bomb", "hug", "singing", "pineapple pizza", "black belt in..."]

let emotions = ["happy", "sad", "confused", "scared"]


  return (
    <div className="App">
      <img src="https://pm1.narvii.com/5718/5b8a185d6f2cdb082383682653251e5d18131292_00.jpg" alt="anime speech search"/>
      <h1>Orator</h1>
      <h3>Rules</h3>
      <p> basically you have three minutes to construct a story using the provided situation and help. your goal is to make your audience feel the emotion shown to you.</p>
        <div className="situation">
        <p> Situation: {situations[Math.floor(Math.random()* situations.length)]}</p>
      <p> Help: {help[Math.floor(Math.random()* help.length)]}</p>
      <p> Emotion: {emotions[Math.floor(Math.random()* emotions.length)]}</p>
        </div>
      
    </div>
  );
}

export default App;
