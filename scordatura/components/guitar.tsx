'use client';
import React from 'react';
import String from './string';


// TODO: Adjust level of strings available 
export default function Guitar() {
    // TODO: String components
    const strings = Array.from( {length: 6}, (_, index) => <String key={index} string={index} />);
    return (
        <div>
            {strings}
        </div>
    )
}
