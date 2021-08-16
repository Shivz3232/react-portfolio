import React, { useEffect } from 'react'

function OnlyFans() {
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
}, []);
  
  return (
    <main className="relative bg-black min-h-screen">
      <iframe src={"https://www.youtube.com/embed/bxqLsrlakK8?loop=1&autoplay=1&controls=0&playlist=bxqLsrlakK8"}
        frameBorder='0'
        allow='autoplay; encrypted-media'
        allowFullScreen
        title='video'
        className="absolute w-full h-full pb-16"
      />
      <div className="absolute w-full h-16 bg-black z-10"></div>
      <div className="absolute w-full h-full z-20 opacity-100"></div>
    </main>
  )
}

export default OnlyFans
