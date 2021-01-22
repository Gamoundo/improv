
import React from 'react';
import Timer from './Timer'
import Voting from './Voting';


class Game extends React.Component{
    state = {
      
      currentUser: "",
      emotions: [],
      situations: [],
      solutions: [] 
      
    }
 loggedInUser = JSON.parse(window.localStorage.getItem("Improv"))

 changeStory() {
  localStorage.clear()
  window.location = '/'
} 
// componentDidUpdate = () => {
//   console.log("hi")
//   console.log(this.props.gameState)
//   // if (this.props.gamestate){

//   // }
//   this.props.gameState.gameInfo.game.users.length !== this.state.users.length && this.setState({users :  this.props.gameState.gameInfo.game.users})

// }
componentDidMount() {
  fetch("http://localhost:3000/emotions")
  .then(r => r.json())
  .then(emotions => this.setState({ emotions }));

  fetch("http://localhost:3000/solutions")
  .then(r => r.json())
  .then(solutions => this.setState({ solutions }));

  fetch("http://localhost:3000/situations")
  .then(r => r.json())
  .then(situations => this.setState({ situations }));

}

displayUsers()  {
console.log(this.state)
  return (this.props.gameState.gameInfo.game.users.map((user) => {
  return(
    <div className="user"> <h3> {user.name}</h3>
    <p>{user.points}</p>
    </div>
  )
}))
}
 round= () => {
  
 
    
    
  const Orator = this.props.gameState.gameInfo.game.player_id;
   console.log(Orator)
   console.log(this.loggedInUser)
  // this.setState({currentUser: Orator})
  return (
    <div className="situation">
      <h2> {Orator} is now speaking</h2>
    <Timer currentPlayer={Orator ==  this.loggedInUser.id} playerId={this.loggedInUser.id} gameId={this.props.gameState.gameState.game.id} emotions={this.state.emotions}/>
    <div className="users"> {this.props.gameState.gameInfo.game && this.displayUsers()}</div>
    
       {this.state.situations.length && <p> Situation: {this.state.situations[Math.floor(Math.random()* this.state.situations.length)].problem}</p>}
      <p> Help: {this.state.solutions.length && this.state.solutions[Math.floor(Math.random()* this.state.solutions.length)].help}</p>
      {Orator ==  this.loggedInUser.id && this.state.emotions.length &&  <p> Emotion: {this.state.emotions[Math.floor(Math.random()* this.state.emotions.length)].feeling}</p>}
      <button onClick= {this.changeStory}> log out?</button>
    </div>
  )

}


render() {
  console.log(this.props.gameState)
  console.log(this.state)
   console.log(this.loggedInUser)


return (
    <div className="App">
      <img src="https://pm1.narvii.com/5718/5b8a185d6f2cdb082383682653251e5d18131292_00.jpg" alt="anime speech search"/>
      {/* <h1>Orator</h1>
      <Timer/>
<div className="users"> {this.state.users && this.displayUsers()}</div>
        <div className="situation">
        <p> Situation: {situations[Math.floor(Math.random()* situations.length)]}</p>
      <p> Help: {help[Math.floor(Math.random()* help.length)]}</p>
      <p> Emotion: {emotions[Math.floor(Math.random()* emotions.length)]}</p>
      <button onClick= {this.changeStory}> log out?</button> */}
        {/* </div> */}
      {this.props.gameState.gameInfo.game && this.round()}
    </div>
  );
}
  
}

export default Game;