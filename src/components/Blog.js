import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

import loadingImage from "../loading.svg";

import sanityClient from "../client";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

function Blog() {
  const [blogData, setBlog] = useState(null);

  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
          title,
          _id,
          slug,
          mainImage{
              asset->{
                  _id,
                  url
              }
          },
          body,
          "name": author->name,
          "authorImage": author->image
      }`
      )
      .then((data) => setBlog(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!blogData)
    return (
      <main className="bg-black min-h-screen p-12">
        <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
          <img src={loadingImage} alt="Loading icon" className="w-20 h-20" />
        </section>
      </main>
    );

  return (
    <main className="bg-black min-h-screen p-6 lg:p-12">
      <article className="container shadow-lg mx-auto bg-green-100 rounded-lg">
        <header className="relative">
          <div className="absolute h-full w-full flex items-center justify-center p-2 lg:p-8">
            <div className="bg-white bg-opacity-75 rounded p-6 lg:p-12">
              <h1 className="cursive text-lg text-center lg:text-6xl mb-4">
                {blogData.title}
              </h1>
            </div>
          </div>
          <img
            src={blogData.mainImage.asset.url}
            alt={blogData.title}
            className="w-full object-cover rouned-t"
            style={{ height: "400px" }}
          />
        </header>
        <div className="px-8 py-12 lg:px-48 lg:py-20 prose text-sm lg:text-3xl lg:prose-xl max-w-full">
          <BlockContent
            blocks={blogData.body}
            projectId="ww4grxeo"
            dataset="production"
          />
        </div>
      </article>
    </main>
  );
}

export default Blog;
