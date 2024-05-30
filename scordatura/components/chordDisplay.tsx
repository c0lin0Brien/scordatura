import React, { useContext } from "react";
import { dummyChordContext } from '@/app/page'

interface ChordDisplayProps {
    chordMode?: boolean;
    currentChord?: string[];
}

const ChordDisplay: React.FC<ChordDisplayProps> = ({chordMode, currentChord}) => {

    return(
        <div>
            Current Chord: {useContext(dummyChordContext)}
        </div>
    )
}

export default ChordDisplay;