import React from 'react';
import Voting from './Voting';

class Timer extends React.Component {
 
 state = {
    time: 150
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
             {this.state.time === 0 && <Voting />}
         </div>
     )
 }   
}

export default Timer;