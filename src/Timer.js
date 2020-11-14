import React from 'react';

class Timer extends React.Component {
 
 state = {
    time: 180
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
         </div>
     )
 }   
}

export default Timer;