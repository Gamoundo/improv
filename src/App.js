import React from 'react';
import Game from './Game'
import './App.css';
import Login from './Login'

const storedUser= window.localStorage.getItem("Improv");

class App extends React.Component {




state = {
  name: storedUser ? JSON.parse(storedUser).name : ""
}


render() {
  return (
    <div className="App">
      <img src="https://pm1.narvii.com/5718/5b8a185d6f2cdb082383682653251e5d18131292_00.jpg" alt="anime speech search"/>
      <h1>Orator</h1>
      <h3>{this.state.name}</h3>
      <h4> Rules </h4>
      <p> basically you have three minutes to construct a story using the provided situation and help. your goal is to make your audience feel the emotion shown to you.</p>
        <div className="situation">
        
        </div>
      {this.state.name !== "" && <button> Join Game</button>}
      {this.state.name !== "" && <button> Create Game</button>}
      {this.state.name == "" && <Login />}
      <Game />
    </div>
  );
}

  
}

export default App;
