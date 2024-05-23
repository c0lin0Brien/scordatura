'use client';
import React from 'react';

interface IntervalProps {
    string: number;
    note: number;
}

const Interval: React.FC<IntervalProps> = ({ string = 0, note = 0}) => {
    const play = () => {
        console.log("string " + {string} + " note " + {note})
    }
    return (
        <div className="interval" onClick={play}>
            {string} Note {note}
        </div>
    )
}

interface StringProps {
    string: number;
}

const String: React.FC<StringProps> = ({string = 0}) => {
    const notes = Array.from( {length: 22}, (_, index) => <Interval key={index} note={index} string={string} />);
    return (
        <div className="string">{notes}</div>
    );
}

export default String;

