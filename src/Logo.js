import React from 'react';


function Logo() {
    return(
        <div>
            <svg width="300" height="300">
   <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="tan" />
   <circle cx="20" cy="40" r="5" stroke="black" stroke-width="4" fill="orange" />
   <circle cx="80" cy="40" r="5" stroke="black" stroke-width="4" fill="orange" />
   <path d="M 30 80 q 30 -40 40 0" stroke="blue" stroke-width="5" fill="red" />
   <text id="TextElement" x="0" y="0" style="font-family:Verdana;font-size:24"> Brain Dead Games
      <animateMotion path="M 0 0 L 100 100" dur="5s" fill="freeze" />
    </text>
</svg> 
        </div>
    )
}

export default Logo;