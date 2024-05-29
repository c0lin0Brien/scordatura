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
    chord: boolean;
}

window.addEventListener('mousedown', () => {
    playing = true;
})

window.addEventListener('mouseup', () => {
    playing = false;
})

const strum = (string: number, note: string, chordOn: boolean) => {
    if (!chordOn) {
        if (playing) {
            play(string, note, chordOn);
        }
    }
}
const play = (string: number, note: string, chordOn: boolean) => {
    if (!chordOn) {
        console.log(`string ${string} note ${note}`);
        const audio = new Audio('/sound/' + note + '.mp3');
        audio.play();
    } else {
        console.log(`string ${string} note ${note} selected for chord`);
    }
}

const Interval: React.FC<IntervalProps> = ({ string = 0, note, children, chord}) => {
    return (
        <div className="interval" onClick={() => play(string, note, chord)} onMouseOver={() => strum(string, note, chord)}>
            {children}
        </div>
    )
}

interface StringProps {
    string: number;
    openNote: number;
    chord: boolean;
}

const String: React.FC<StringProps> = ({string = 0, openNote, chord}) => {
    const notes = Array.from( {length: 22}, (_, index) => <Interval key={index} note={totalNoteMap[openNote + index + 1]} string={string} chord={chord}/>);
    return (
        // TODO: Make this flex and nice
        <div className="flex justify-evenly"> 
            <svg xmlns="http://www.w3.org/2000/svg" width="4vw" height="4vh" viewBox="0 0 100 100" className='mx-[1vw]'
             onClick={() => play(string, totalNoteMap[openNote], chord)} onMouseOver={() => strum(string, totalNoteMap[openNote], chord)}>
                <circle cx="50" cy="50" r="46" fill='white' stroke='black' stroke-width="4px">
                </circle>
                <text x="50%" y="50%" text-anchor="middle" stroke="black" stroke-width="2px" dy=".3em" fontSize={"40px"}>{totalNoteMap[openNote]}</text>
            </svg>
            {notes}
        </div>
    );
}

export default String;

