import React from 'react'
import {useHistory} from "react-router-dom"


function CreateGame(props) {
    const history = useHistory()
    const create= () =>{
        // const {history} = this.props 
        
        let obj = {
          name: props.name
      
        }
        fetch('http://localhost:3000/gamerooms', {
          method: 'POST',
          headers: {"Content-Type": 'application/json'},
          body: JSON.stringify(obj)
      
        }
          ).then(r => r.json())
          .then(gameInfo => {
            console.log(gameInfo)
            
            props.updateGame(gameInfo)
            history.push(`/Game/${gameInfo.game.id}`) 
          })
      
      }
    return (
        <div>
            <button onClick={create}> Create Game</button>
        </div>
    ) 
} 


export default CreateGame;