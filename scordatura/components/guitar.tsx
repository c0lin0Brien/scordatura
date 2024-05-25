'use client';
import React from 'react';
import String from './string';

const standardTuning: number[] = [12, 17, 22, 27, 31, 36];

// TODO: Adjust level of strings available 
const Guitar = () => {
    // TODO: String components

    const strings = Array.from( {length: 6}, (_, index) => <String key={index} string={index}
     openNote={standardTuning[index]}/>);
    return (
        <div>
            {strings}
        </div>
    )
}

export default Guitar;
