import React from 'react';

class Timer extends React.Component {
 
 state = {
    time: 180
 }

 countdown(x) {
    while (x > 0) {
       x = x - 1
    } 
 }
    render() {
        
     return(
         <div>
             { this.countdown ? this.countdown(180): 0}
         </div>
     )
 }   
}

export default Timer;