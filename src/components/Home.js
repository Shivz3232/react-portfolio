import React from "react";
import image from "../rgb.jpg";

function Home() {
  return (
    <main>
      <img
        src={image}
        alt="Crushed Paper"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-white font-bold serif leading-none lg:leading-snug home-name">
          Namaste. I'm Shivu.
        </h1>
      </section>
    </main>
  );
}

export default Home;
