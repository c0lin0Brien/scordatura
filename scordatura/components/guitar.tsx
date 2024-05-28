'use client';
import React, { useState } from 'react';
import String from './string';
import { start } from 'repl';

// TODO: Adjust level of strings available 
const Guitar = () => {
    const standardTuning: number[] = [12, 17, 22, 27, 31, 36];
    const [currentTuning, setTuning] = useState([...standardTuning]);

    const randomInt = (max: number) => {
        return Math.floor(Math.random() * max);
    }

    const randomizeTuning = () => {
        let newTuning: number[] = [];
        for (let i = 0; i < 6; i++) {
            let change: number = randomInt(12);
            newTuning.push(standardTuning[i] - change);
        }
        console.log(newTuning);
        setTuning(newTuning);
    }
    // TODO: String components

    const strings = Array.from( {length: 6}, (_, index) => <String key={index} string={index}
     openNote={currentTuning[index]}/>);
    return (
        <div>
            {strings}
            <button onClick={randomizeTuning}>Randomize</button>
        </div>
    )
}

export default Guitar;
