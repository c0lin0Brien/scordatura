import React, { useEffect, useState } from 'react';

const ChordLog: React.FC = () => {
    const [chords, setChords] = useState<string>('');

    useEffect(() => {
        const fetchChords = async () => {
            const response = await fetch('chords.json');
            const chordsData: string = await response.json();
            console.log(chordsData);
            setChords(chordsData);
        };

        fetchChords();
    }, []);

    return (
        <>
            <p>Hope this worked!</p>
        </>
    );
};

export default ChordLog;
