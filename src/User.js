import React from 'react';

const User = (props) => {
    const familiar =props.familiar
    let greetings ;
    if(familiar){
        greetings = <h1>AssalamuAlaikum how are you my dear</h1>
    }
    else{
        greetings = <h1>Do we familiar?</h1>
    }
    return (
        <div>
            <h2>{greetings}</h2>
        </div>
    );
};

export default User;