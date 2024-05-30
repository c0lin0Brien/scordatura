"use client";
import React, { useContext, useState, createContext } from "react";
import Guitar from "@/components/guitar";
import Header from "@/components/header";
import ChordDisplay from "@/components/chordDisplay";

export const dummyChordContext = createContext('A Maj 7');

export default function Home() {

  const dummyChord = useContext(dummyChordContext);

  const [currentChord, setCurrentChord] = useState(Array(6));
  const [chordMode, setChordMode] = useState(false);

  return (
    <>
      <dummyChordContext.Provider value={dummyChord}>
        <Header />
        <Guitar chordMode={chordMode} setChord={setChordMode} />
        <ChordDisplay />
      </dummyChordContext.Provider>
    </>
  );
}
