import React, { useState } from 'react'

const Buttons = () => {
    const [num, setNum] = useState();

    const menfi = () => {
        setNum(+document.querySelector("p").innerText--)
    }
    const musbet = () => {
        setNum(+document.querySelector("p").innerText++)
    }

    return (
        <div className='buttons'>
            <button onClick={menfi}>-</button>
            <p>0</p>
            <button onClick={musbet}>+</button>
        </div>
    )
}

export default Buttons