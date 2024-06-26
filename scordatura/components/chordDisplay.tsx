import React, { useContext } from "react";
import { ChordContext } from '@/app/page'

interface ChordDisplayProps {
    chordMode?: boolean;
    currentChord?: string[];
}

const ChordDisplay: React.FC<ChordDisplayProps> = ({chordMode, currentChord}) => {

    return(
        <div className="mx-[2vw]">
            Current Chord: {useContext(ChordContext)}
        </div>
    )
}

export default ChordDisplay;