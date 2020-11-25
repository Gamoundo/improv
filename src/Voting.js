import React from 'react';
import Select from 'react-select'
const emotions = [
    { value: 'happy', label: 'happy' },
    { value: 'sad', label: 'sad' },
    { value: 'scared', label: 'scared' },
    { value: 'confused', label: 'confused' }
  ]


function Voting() {
    return(
        <div>
<Select options={emotions}/>
        </div>
    )
}

export default Voting;