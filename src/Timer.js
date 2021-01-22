import React from 'react';
import Voting from './Voting';

class Timer extends React.Component {
 
 state = {
    time: 5
 }

 componentDidMount() {
    this.myInterval = setInterval(() => {
        const { time } = this.state

        if (time > 0) {
            this.setState(({ time }) => ({
                time: time - 1
            }))
        }
    }, 1000)
}




 
    render() {
        
     return(
         <div>
             {this.state.time}
             {this.state.time === 0 &&  !this.props.currentPlayer && <Voting playerId={this.props.playerId} gameId={this.props.gameId} emotions={this.props.emotions}/>}
         </div>
     )
 }   
}

export default Timer;