import React from 'react';

const Hello = ({name, say, dostuff}) => (
    <div>
        <p> Greetings {name}</p>
        <p> Message: {say}</p>
        <a href="#" onClick={dostuff}>Clicky</a>
    </div>
);

export default Hello;