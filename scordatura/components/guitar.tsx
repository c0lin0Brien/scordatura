'use client';
import React, { useState } from 'react';
import String from './string';
import { start } from 'repl';

// TODO: Adjust level of strings available 
const Guitar = () => {
    const standardTuning: number[] = [12, 17, 22, 27, 31, 36];
    const [currentTuning, setTuning] = useState([...standardTuning]);

    const [chordMode, setChord] = useState(false);

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

    const toggleChord = () => {
        setChord(!chordMode);
    }
    
    const FretMarker: React.FC = () => {

        const fretMarks = Array.from({ length: 22 }, (_, i) => <div className='w-[100vh] text-center'>{i + 1}</div>)

        return (
            <div className='flex justify-evenly mx-[2vw]'>
                <div className='text-center mx-[1vw] w-[22vw]'>0</div>
                {fretMarks}
            </div>
        )
    }

    const strings = Array.from( {length: 6}, (_, index) => <String key={index} string={index}
     openNote={currentTuning[index]} chord={chordMode}/>);
    
    return (
        <div>
            <div className='fretBoard'>{strings}</div>
            <FretMarker />
            <div className='flex justify-center'>
                <button onClick={randomizeTuning}>Randomize</button>
                <button onClick={resetTuning}>Reset</button>
                <button onClick={toggleChord}>Chord Builder</button>
            </div>
        </div>
    )
}

export default Guitar;
