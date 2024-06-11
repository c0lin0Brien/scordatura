"use client";
import React, { useContext, useState, createContext } from "react";
import Guitar from "@/components/guitar";
import Header from "@/components/header";
import ChordDisplay from "@/components/chordDisplay";
import ChordLog from "@/components/chordMap";

export const ChordContext = createContext(Array(6));
interface TuningContextType {
  currentTuning: number[];
  setTuning: React.Dispatch<React.SetStateAction<number[]>>;
}
export const TuningContext = createContext<TuningContextType | undefined>(undefined);

export const useTuningContext = (): TuningContextType => {
  const context = useContext(TuningContext);
  if (context === undefined) {
    throw new Error('useTuningContext must be used within a TuningProvider');
  }
  return context;
}

export default function Home() {

  const [currentChord, setCurrentChord] = useState([' X ', ' X ', ' X ', ' X ', ' X ', ' X ']);
  const [chordMode, setChordMode] = useState(false);
  const standardTuning: number[] = [12, 17, 22, 27, 31, 36];
  const [currentTuning, setTuning] = useState<number[]>([...standardTuning]);

  return (
    <>
      <TuningContext.Provider value={{ currentTuning, setTuning }}>
        <ChordContext.Provider value={currentChord}>
          <Header />
          <Guitar chordMode={chordMode} setChordMode={setChordMode} setChord={setCurrentChord}/>
          <ChordDisplay />
        </ChordContext.Provider>
      <ChordLog />
      </TuningContext.Provider>
    </>
  );
}
