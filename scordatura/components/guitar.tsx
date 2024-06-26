'use client';
import React, { useContext, useState } from 'react';
import String from './string';
import { ChordContext, TuningContext, useTuningContext } from '@/app/page';

interface GuitarProps {
    chordMode: boolean;
    setChordMode: React.Dispatch<React.SetStateAction<boolean>>;
    setChord: React.Dispatch<React.SetStateAction<string[]>>;
}

// TODO: Adjust level of strings available 
const Guitar: React.FC<GuitarProps> = ({chordMode, setChordMode, setChord}) => {
    const standardTuning: number[] = [12, 17, 22, 27, 31, 36];
    const {currentTuning, setTuning} = useTuningContext();
    const currentChord = useContext(ChordContext);

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
        setChord([" X ", " X ", " X ", " X ", " X ", " X "]);
        setChordMode(!chordMode);
        console.log(currentTuning)
    }

    const toggleChord = () => {
        setChordMode(!chordMode);
    }

    const strum = (strummingChord: string[]) => {
        if (chordMode) {
            for (let i:number = 0; i < strummingChord.length; i++) {
                if (strummingChord[i] != " X ") {
                    console.log(strummingChord[i]);
                    let audio = new Audio(`/sound/${strummingChord[i].trim()}.mp3`);
                    audio.play();
                }
            }
        }
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
     openNote={currentTuning[index]} chordOn={chordMode} setChord={setChord}/>);
    
    return (
        <div>
            <div className='fretBoard'>{strings}</div>
            <FretMarker />
            <div className='flex justify-center'>
                <button onClick={randomizeTuning}>Randomize</button>
                <button onClick={resetTuning}>Reset</button>
                <button onClick={toggleChord}>Chord Builder</button>
                <button onClick={() => strum(currentChord)}>Strum</button>
            </div>
        </div>
    )
}

export default Guitar;
