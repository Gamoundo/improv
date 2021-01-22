import React from 'react';
import Select from 'react-select'

 


function Voting(props) {
    let emotions = []
    for (let emotion of props.emotions) {
        emotions.push({ ...emotion, value: emotion.id, label: emotion.feeling})
       console.log(emotions) 
    }
    const changeHandler = (e) => {
        // e.label
      let voteObj = {
            playerId: props.playerId,
            gameId: props.gameId,
            vote: e.target.value

        }
        fetch("http://localhost:3000/vote",{
            method: 'POST',
            body: JSON.stringify(voteObj),
            headers: {
                "Content-Type": "application/json"
            }

        }).then(r => r.json())
        .then(output => console.log(output))
    }
    return(
        <div className='select'>
<h3> Vote!</h3>
<Select onChange={changeHandler} options={emotions}/>
        </div>
    )
}

export default Voting;