import React from 'react';

const Validation = (props) => {

    let message =<p>Entered text is too short! </p>;
    if(props.stringLen > 6){
       message = <p>Entered text is long!</p>;
    }
    return (
        <div>
        {message}
        </div>
    );

};

export default Validation;