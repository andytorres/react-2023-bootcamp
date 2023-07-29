import React, { useState } from 'react';


function Clicker(props) {
    const [number, setNumber] = useState(0);
    // let number  = props.number

    const handleClick = function(){
        setNumber(Math.floor(Math.random() * props.maxNum))
    }

    return ( 
        <div className="Clicker">
            <h1>Number is {number}</h1>
            { 
            number === 7 ? <h2>YOU WIN!</h2> : <button onClick={handleClick}>Click</button>
            }
            
        </div>
     );
}

export default Clicker;
