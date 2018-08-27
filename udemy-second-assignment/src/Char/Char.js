import React from 'react';

const char = (props) => {
    const style = {
        display: 'inline-block',
        padding: '16px',
        margin: '16px',
        border: '1px solid black',
        textAlign: 'center',
        transition: 'transform .2s' /* Animation */,
    
    };

    return (
        <div style={style} onClick={props.clicked}>
            {props.character}
        </div>
    );
};

export default char;