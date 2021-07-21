import React, { useEffect } from 'react';
import P5Wrapper from "react-p5-wrapper";
import Sketch from "./Sketch";

function Home() {
    useEffect(() => {
        window.scrollTo(0, document.body.scrollHeight);
    }, []);

    return (
        <div className="relative flex justify-center w-full min-h-screen bg-black">
            <P5Wrapper sketch={Sketch} />
            <h1 className="absolute m-auto font-bold text-center text-white text-5xl lg:text-9xl top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2">
                Namaste. I'm Shivu.
            </h1>

        </div>
    )
}

export default Home
