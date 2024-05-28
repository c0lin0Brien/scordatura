'use client';
import React from 'react';

let playing: boolean = false;

// Map of all possible notes that can be played
const totalNoteMap: string[] = 
    ['E1', 'F1', 'Gb1', 'G1', 'Ab1', 'A1', 'Bb1', 'B1', 'C2', 'Db2', 'D2', 'Eb2',
    'E2', 'F2', 'Gb2', 'G2', 'Ab2', 'A2', 'Bb2', 'B2', 'C3', 'Db3', 'D3', 'Eb3',
    'E3', 'F3', 'Gb3', 'G3', 'Ab3', 'A3', 'Bb3', 'B3', 'C4', 'Db4', 'D4', 'Eb4',
    'E4', 'F4', 'Gb4', 'G4', 'Ab4', 'A4', 'Bb4', 'B4', 'C5', 'Db5', 'D5', 'Eb5',
    'E5', 'F5', 'Gb5', 'G5', 'Ab5', 'A5', 'Bb5', 'B5', 'C6', 'Db6', 'D6'];

interface IntervalProps {
    string: number;
    note: string;
    children?: string;
}

window.addEventListener('mousedown', () => {
    playing = true;
})

window.addEventListener('mouseup', () => {
    playing = false;
})

const Interval: React.FC<IntervalProps> = ({ string = 0, note, children}) => {
    const strum = () => {
        if (playing) {
            play();
        }
    }
    const play = () => {
        console.log(`string ${string} note ${note}`);
        const audio = new Audio('/sound/' + note + '.mp3');
        audio.play();
    }
    return (
        <div className="interval" onClick={play} onMouseOver={strum}>
            {children}
        </div>
    )
}

interface StringProps {
    string: number;
    openNote: number;
}

const String: React.FC<StringProps> = ({string = 0, openNote}) => {
    const notes = Array.from( {length: 22}, (_, index) => <Interval key={index} note={totalNoteMap[openNote + index + 1]} string={string}/>);
    return (
        // TODO: Make this flex and nice
        <div className="flex justify-evenly"> 
            <Interval string={string} note={totalNoteMap[openNote]}>
                {totalNoteMap[openNote]}
            </Interval>
            {notes}
        </div>
    );
}

export default String;

