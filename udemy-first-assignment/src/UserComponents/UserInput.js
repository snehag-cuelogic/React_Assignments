import React from 'react';

const UserInput = (props) => {
    const custom_class = {
        border: '2px solid red',
        width: '20%'
    };
    return (
        <div>
            <p>Enter the paragraphs</p>
            <label>Enter First Name </label>
            <input type="text" name="text1" style={custom_class} placeholder="Enter something.." onChange={props.changeHandler} value={props.name} />
            {props.children}
        </div>
    )
};

export default UserInput;