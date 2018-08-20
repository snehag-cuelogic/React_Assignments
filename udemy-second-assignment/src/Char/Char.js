import React from 'react';

const Char = (props) => {

    const customStyle = {
        display: 'inline-block',
        padding: '16px',
        margin: '16px',
        border: '1px solid black'
    }
    return (
        <div style={customStyle} >
        <p onClick={props.click}> {props.inputString}</p>
        
        </div>
    )
};

export default Char;