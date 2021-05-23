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
            <h2>Greetings</h2>
            <h2>{greetings}</h2>
            <h2>food</h2>
            {
                familiar? <p>let's have some food my dear</p> : <p>ahare koydin dhore khan na apni?</p>
            }
            <h2>Contact</h2>
            {
                familiar && <h2>here is my visiting card abar dekha hobe ni hihi </h2> 
            }
        </div>
    );
};

export default User;