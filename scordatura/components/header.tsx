import React from "react";

const Header: React.FC = () => {
    return(
        <div className="flex mx-[2vw] my-[2vh] justify-between">
            <div className="font-extrabold text-8xl">SCORDATURA</div>
            <div className="mx-[2vw]">
                /ˌskôrdəˈto͝orə/ <br />
                noun: the technique of altering the normal tuning of a stringed instrument to produce particular effects. <br />
                late 19th century: Italian, from scordare ‘be out of tune’.
            </div>
        </div>
    )
}

export default Header;