import React from 'react';
import Game from './Game'
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Login from './Login'
import { ReactComponent as Logo } from './logo.svg';
import JoinGame from './JoinGame';
import CreateGame from './CreateGame';



const storedUser= window.localStorage.getItem("Improv");

class App extends React.Component {




state = {
  name: storedUser ? JSON.parse(storedUser).name : "",
  gameInfo: {},
  currentUser: {}
}

playGame() {
  window.location = '/Game' 
}

// createGame= () =>{
//   const {history} = this.props 
//   console.log(this.props)
//   let obj = {
//     name: this.state.name

//   }
//   fetch('http://localhost:3000/gamerooms', {
//     method: 'POST',
//     headers: {"Content-Type": 'application/json'},
//     body: JSON.stringify(obj)

//   }
//     ).then(r => r.json())
//     .then(game => {
//       console.log(game)
      
//       history.push(`/Game/${game.id}`) 
//     })

// }

updateGame= (gameInfo) => {
this.setState({...this.state, gameInfo})
} 

updateUser= (name) => {
  this.setState({...this.state, name})
  } 


render() {
  console.log(this.state)
    return (
    
      <Router>
        <Switch>

        
        <div className="App">
        <img src="https://pm1.narvii.com/5718/5b8a185d6f2cdb082383682653251e5d18131292_00.jpg" alt="anime speech search"/>
        <h1>Orator</h1>
        <h3>{this.state.name}</h3>
        <h4> Rules </h4>
        <p> basically you have three minutes to construct a story using the provided situation and help. your goal is to make your audience feel the emotion shown to you.</p>
          <div className="situation">
          
          </div>
        {this.state.name !== "" && <JoinGame updateGame={this.updateGame} />}
        {this.state.name !== "" && <CreateGame name={this.state.name} updateGame={this.updateGame}/>}
        {this.state.name === "" && <Login  updateUser={this.updateUser}/>}
        {/* <Game /> */}

        
        {/* <Route exact path="/Game/:id" component= {Game}/> */}
        <Route exact path="/Game/:id">
        <Game  gameState= {this.state} />

        </Route>
        <Logo />
      </div>
      </Switch>
      </Router>
      
    );   
  } 
  
}

  


export default App;
