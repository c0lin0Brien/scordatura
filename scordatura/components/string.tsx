'use client';
import React, { useState, useContext} from 'react';
import { ChordContext } from '@/app/page';

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
    chordOn: boolean;
    setChord: React.Dispatch<React.SetStateAction<string[]>>;
    currentChord: string[];
    selectedInterval: string;
    setSelectedInterval: React.Dispatch<React.SetStateAction<string>>;

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

const Interval: React.FC<IntervalProps> = ({ string = 0, note, children, chordOn, setChord, currentChord, selectedInterval, setSelectedInterval}) => {
    const [toggled, setToggled] = useState('bg-white');

    const intervalClick = () => {
        play(string, note, chordOn);
        if (chordOn) {
            let newChord: string[] = Array(...currentChord);
            if (selectedInterval != note) {
                setSelectedInterval(note);
                newChord[string] = ` ${note} `;
                setChord(newChord);
            } else if (selectedInterval == note) {
                setSelectedInterval("");
                newChord[string] = " X ";
                setChord(newChord);
            }
            console.log(`FINAL VALUES: selectedInterval: ${selectedInterval}`)
        }
    }

    const intervalColorUpdate = () => {
        if (chordOn) {
            if (selectedInterval == note && toggled == 'bg-white') {
                setToggled('bg-black');
            } else if (selectedInterval != note && toggled == 'bg-black') {
                setToggled('bg-white');
            }   
        } else if (!chordOn && toggled == 'bg-black') {
            setToggled('bg-white');
        }
    }

    intervalColorUpdate();

    return (
        <div className={`${toggled} outline-2 outline outline-black min-h-[4vh] w-[10vw] text-center justify-center justify-items-center flex flex-col`}
         onClick={() => intervalClick()} onMouseOver={() => strum(string, note, chordOn)}>
            {children}
        </div>
    )
}

interface StringProps {
    string: number;
    openNote: number;
    chordOn: boolean;
    setChord: React.Dispatch<React.SetStateAction<string[]>>;
}

const String: React.FC<StringProps> = ({string = 0, openNote, chordOn, setChord}) => {
    let currentChord: string[] = useContext(ChordContext);
    const [selectedInterval, setSelectedInterval] = useState("");
    const [openToggle, setOpen] = useState('white');
    const [openText, setOpenText] = useState('black');
    const defaultChord = [" X ", " X ", " X ", " X ", " X ", " X "];

    const notes = Array.from( {length: 22}, (_, index) => <Interval key={index} note={totalNoteMap[openNote + index + 1]}
     string={string} chordOn={chordOn} setChord={setChord} currentChord={currentChord} selectedInterval={selectedInterval}
     setSelectedInterval={setSelectedInterval}/>);


    const openColorUpdate = () => {
        if (chordOn) {
            if (selectedInterval == totalNoteMap[openNote] && openToggle == 'white') {
                setOpen('black');
                setOpenText('white');
            } else if (selectedInterval != totalNoteMap[openNote] && openToggle == 'black') {
                setOpen('white');
                setOpenText('black');
            }
        } else if (!chordOn && openToggle == 'black') {
            setOpen('white');
            setOpenText('black');
        }
    }

    // function for checking if string arrays are equal
    const arrayEquals = (a: string[], b: string[]) => {
        if (a === b) return true;
        if (a == null || b == null) return false;
        if (a.length !== b.length) return false;

        for (var i = 0; i < a.length; ++i) {
            if (a[i] !== b[i]) return false;
        }
        return true;
    }

    const resetChord = () => {
        if (!chordOn && selectedInterval != "") {
            setSelectedInterval("");
        }
    }

    const openClick = () => {
        play(string, totalNoteMap[openNote], chordOn);
        console.log(`INITIAL VALUES: selectedInterval: ${selectedInterval}, totalNoteMap[openNote] ${totalNoteMap[openNote]}`);
        if (chordOn) {
            let newChord: string[] = Array(...currentChord);
            if (selectedInterval != totalNoteMap[openNote]) {
                setSelectedInterval(totalNoteMap[openNote]);
                newChord[string] = ` ${totalNoteMap[openNote]} `;
                setChord(newChord);
            } else if (selectedInterval == totalNoteMap[openNote]) {
                setSelectedInterval("");
                newChord[string] = " X ";
                setChord(newChord);
            }
            console.log(`FINAL VALUES: selectedInterval: ${selectedInterval}, totalNoteMap[openNote] ${totalNoteMap[openNote]},
            openToggle: ${openToggle}, openText: ${openText}`);
        }
    }

    openColorUpdate();
    resetChord();

    return (
        <div className="flex justify-evenly"> 
            {/* Open note */}
            <svg xmlns="http://www.w3.org/2000/svg" width="4vw" height="4vh" viewBox="0 0 100 100" className='mx-[1vw]'
             onClick={() => openClick()} onMouseOver={() => strum(string, totalNoteMap[openNote], chordOn)}>
                <circle cx="50" cy="50" r="46" fill={`${openToggle}`} stroke='black' stroke-width="4px">
                </circle>
                <text x="50%" y="50%" text-anchor="middle" color={`${openText}`} stroke={`${openText}`} stroke-width="4px" dy=".3em" fontSize={"40px"}>{totalNoteMap[openNote]}</text>
            </svg>
            {/* Rest of notes */}
            {notes}
        </div>
    );
}

export default String;

