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
        setTuning(newTuning);
        console.log(currentTuning);
    }

    const resetTuning = () => {
        setTuning(standardTuning);
        console.log(currentTuning)
    }
    // TODO: String components

    const strings = Array.from( {length: 6}, (_, index) => <String key={index} string={index}
     openNote={currentTuning[index]}/>);
    
    return (
        <div>
            <div className='fretBoard'>{strings}</div>
            <div className='flex justify-center'>
                <button onClick={randomizeTuning}>Randomize</button>
                <button onClick={resetTuning}>Reset</button>
            </div>
        </div>
    )
}

export default Guitar;
