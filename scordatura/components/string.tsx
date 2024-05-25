'use client';
import React from 'react';

const totalNoteMap: string[] = 
    ['E1', 'F1', 'Fb1', 'G1', 'Gb1', 'A1', 'Ab1', 'B1', 'C2', 'Cb2', 'D2', 'Db2',
    'E2', 'F2', 'Fb2', 'G2', 'Gb2', 'A2', 'Ab2', 'B2', 'C3', 'Cb3', 'D3', 'Db3',
    'E3', 'F3', 'Fb3', 'G3', 'Gb3', 'A3', 'Ab3', 'B3', 'C4', 'Cb4', 'D4', 'Db4',
    'E4', 'F4', 'Fb4', 'G4', 'Gb4', 'A4', 'Ab4', 'B4', 'C5', 'Cb5', 'D5', 'Db5',
    'E5', 'F5', 'Fb5', 'G5', 'Gb5', 'A5', 'Ab5', 'B5', 'C6', 'Cb6', 'D6'];

interface IntervalProps {
    string: number;
    note: string;
}

const Interval: React.FC<IntervalProps> = ({ string = 0, note = 0}) => {
    const play = () => {
        console.log(`string ${string} note ${note}`);
    }
    return (
        <div className="interval" onClick={play}>
        
        </div>
    )
}

const example: string[] = ['hi', 'hello', 'world'];

interface StringProps {
    string: number;
    openNote: number;
}

const String: React.FC<StringProps> = ({string = 0, openNote}) => {
    const notes = Array.from( {length: 22}, (_, index) => <Interval key={index} note={totalNoteMap[openNote + index]} string={string} />);
    return (
        // TODO: Make this flex and nice
        <div className="flex justify-evenly">{notes}</div>
    );
}

export default String;

