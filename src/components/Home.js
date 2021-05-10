import React, { useEffect } from 'react';

function Home() {
    useEffect(() => {
        window.scrollTo(0, document.body.scrollHeight);
    }, []);

    return (
        <div className="flex justify-center w-full min-h-screen bg-black">
            <h1 className="m-auto font-bold text-center text-white text-5xl lg:text-9xl">
                Namaste. I'm Shivu.
            </h1>
        </div>
    )
}

export default Home
