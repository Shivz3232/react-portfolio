import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

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

  // @TODO Add a loading icon
  if (!blogData) return <div>Loading...</div>;

  return (
    <main className="bg-gray-200 min-h-screen p-12">
      <article className="container shadow-lg mx-auto bg-green-100 rounded-lg">
        <header className="relative">
          <div className="absolute h-full w-full flex items-center justify-center p-8">
            <div className="bg-white bg-opacity-75 rounded p-12">
              <h1 className="cursive text-3xl lg:text-6xl mb-4">
                {blogData.title}
              </h1>
              <div className="flex justify-center text-gray-800">
                <img
                  src={urlFor(blogData.authorImage).url()}
                  alt={blogData.name}
                  className="w-10 h-10 rounded-full"
                />
                <p className="cursive flex items-center pl-2 text-2xl">
                  {blogData.name}
                </p>
              </div>
            </div>
          </div>
          <img
            src={blogData.mainImage.asset.url}
            alt={blogData.title}
            className="w-full object-cover rouned-t"
            style={{ height: "400px" }}
          />
        </header>
        <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
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