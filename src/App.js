import React from 'react';
import Game from './Game'
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom"
import Login from './Login'
import { ReactComponent as Logo } from './logo.svg';
const storedUser= window.localStorage.getItem("Improv");

class App extends React.Component {




state = {
  name: storedUser ? JSON.parse(storedUser).name : ""
}

playGame() {
  window.location = '/Game'
}

render() {
  return (
    <Router>
      <div className="App">
      <img src="https://pm1.narvii.com/5718/5b8a185d6f2cdb082383682653251e5d18131292_00.jpg" alt="anime speech search"/>
      <h1>Orator</h1>
      <h3>{this.state.name}</h3>
      <h4> Rules </h4>
      <p> basically you have three minutes to construct a story using the provided situation and help. your goal is to make your audience feel the emotion shown to you.</p>
        <div className="situation">
        
        </div>
      {this.state.name !== "" && <button onClick={this.playGame}> Join Game</button>}
      {this.state.name !== "" && <button> Create Game</button>}
      {this.state.name == "" && <Login />}
      {/* <Game /> */}
      <Route exact path="/Game" component= {Game}/>
      <Logo />
    </div>
    </Router>
    
  );
}

  
}

export default App;
