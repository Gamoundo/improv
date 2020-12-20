import React from 'react';
import Select from 'react-select'
const emotions = [
    { value: 'happy', label: 'happy' },
    { value: 'sad', label: 'sad' },
    { value: 'scared', label: 'scared' },
    { value: 'confused', label: 'confused' }
  ]


function Voting() {

    const changeHandler = (e) => {
        console.log(e)
    }
    return(
        <div className='select'>
<h3> Vote!</h3>
<Select onChange={changeHandler} options={emotions}/>
        </div>
    )
}

export default Voting;