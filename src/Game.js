
import React from 'react';
import Timer from './Timer'
import Voting from './Voting';


class Game extends React.Component{
    state = {
      users : [],
      currentUser: ""
      
    }

 changeStory() {
  localStorage.clear()
  window.location = '/'
} 
componentDidUpdate() {
  console.log("hi")
  // if (this.props.gamestate){

  // }
  this.props.gameState.gameInfo.game.users.length !== this.state.users.length && this.setState({users :  this.props.gameState.gameInfo.game.users})

}


displayUsers()  {
console.log(this.state)
  return (this.state.users.map((user) => {
  return(
    <div className="user"> <h3> {user.name}</h3>
    <p>{user.points}</p>
    </div>
  )
}))
}



render() {
  console.log(this.state)
    let situations = ["shark attack", "stubbed toe", "totaled boss's car", "vengeful ghost", "caught committing crime", "It is M-fing Monday!", "Surrounded by clowns", "World ends in a hour", "Witnessed an alien abduction", "Ran out of goldfish", "trapped with a shapehifter", "Out of coffee"]
let help = ["graham crackers", "interpretive dance", "diplomacy", "hidden bobby pin", "smoke bomb", "hug", "singing", "pineapple pizza", "black belt in..."]

let emotions = ["happy", "sad", "confused", "scared"]
//  let round= () => {
//   for (let i = 1; i < 3; i++) {
//     users= this.state.users
//     for (let x = 0; x < users.length; x++) {
//       const currentUser = users[x];
//       this.setState({currentUser})
//       return (
//         <div className="situation">
//           <p> Situation: {situations[Math.floor(Math.random()* situations.length)]}</p>
//           <p> Help: {help[Math.floor(Math.random()* help.length)]}</p>
//           {currentUser == user.name && <p> Emotion: {emotions[Math.floor(Math.random()* emotions.length)]}</p>}
//         </div>
//       )
//     }
    
//   }
// }

return (
    <div className="App">
      <img src="https://pm1.narvii.com/5718/5b8a185d6f2cdb082383682653251e5d18131292_00.jpg" alt="anime speech search"/>
      <h1>Orator</h1>
      <Timer/>
<div className="users"> {this.state.users && this.displayUsers()}</div>
        <div className="situation">
        <p> Situation: {situations[Math.floor(Math.random()* situations.length)]}</p>
      <p> Help: {help[Math.floor(Math.random()* help.length)]}</p>
      <p> Emotion: {emotions[Math.floor(Math.random()* emotions.length)]}</p>
      <button onClick= {this.changeStory}> log out?</button>
        </div>
      
    </div>
  );
}
  
}

export default Game;