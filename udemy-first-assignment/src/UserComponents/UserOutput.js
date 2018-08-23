import React from 'react';

const userOutput = (props) => {
 return(
    <div>
        <p className="Custom">This is paragraph 1 and I am {props.name}</p>
        <p className="Custom">This is paragraph 2 and I am {props.name}</p>

        {props.children}

         </div>
 )
};
export default userOutput;