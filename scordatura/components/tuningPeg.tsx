'use client'
import React from "react"


const TuningPeg: React.FC = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="4vw" height="4vh" viewBox="0 0 100 100" className='mx-[1vw]'>
                <circle cx="50" cy="50" r="46" fill='black' stroke='black' stroke-width="4px">
                </circle>
                <text x="50%" y="50%" text-anchor="middle" color="white" stroke="white" stroke-width="4px" dy=".3em" fontSize={"40px"}>&lt;</text>
            </svg>
    )
}

export default TuningPeg;