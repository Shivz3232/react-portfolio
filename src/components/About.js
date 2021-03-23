import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

import loadingImage from "../loading.svg";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`
      )
      .then((data) => {
        console.log(data[0]);
        setAuthor(data[0]);
      })
      .catch(console.error);
  }, []);

  // @TODO Add a loading icon
  if (!author)
    return (
      <main className="bg-black min-h-screen p-12">
        <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
          <img src={loadingImage} alt="Loading icon" className="w-20 h-20" />
        </section>
      </main>
    );

  return (
    <main className="relative bg-black min-h-screen p-12">
      <div className="p-10 lg:pt-48 container mx-auto relative">
        <section className="bg-white rounded-lg shadow-2xl lg:flex p-20">
          <img
            src={urlFor(author.authorImage).width(200).height(200).url()}
            alt={author.name}
            className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
          />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive text-6xl text-black mb-4">
              Hey there, I'm <span className="text-red-700">{author.name}</span>
            </h1>
            <div className="prose lg:prose-xl text-black">
              <BlockContent
                blocks={author.bio}
                projectId="ww4grxeo"
                dataset="production"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default About;
