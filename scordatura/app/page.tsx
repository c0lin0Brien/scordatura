"use client";
import React, { useContext, useState, createContext } from "react";
import Guitar from "@/components/guitar";
import Header from "@/components/header";
import ChordDisplay from "@/components/chordDisplay";

export const ChordContext = createContext(Array(6));

export default function Home() {

  const [currentChord, setCurrentChord] = useState(Array(6));
  const [chordMode, setChordMode] = useState(false);

  return (
    <>
      <ChordContext.Provider value={currentChord}>
        <Header />
        <Guitar chordMode={chordMode} setChordMode={setChordMode} setChord={setCurrentChord}/>
        <ChordDisplay />
      </ChordContext.Provider>
    </>
  );
}
