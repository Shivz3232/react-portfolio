import React, { useState, useEffect } from "react";
import sanityClient from "../client";

import Document from "./Document";

import loadingImage from "../loading.svg";

function Certificates() {
  const [certificates, setcertificates] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "certificate"]{
              title,
              from,
              issuedDate,
              certificate{
                  asset->{
                      _id,
                      url
                  },
                  alt
              }
          }`
      )
      .then((data) => setcertificates(data))
      .catch(console.error);
  }, []);

  if (!certificates)
    return (
      <main className="bg-black min-h-screen p-12">
        <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
          <img src={loadingImage} alt="Loading icon" className="w-20 h-20" />
        </section>
      </main>
    );

  return (
    <main className="bg-black min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl text-white flex justify-center cursive">
          My Certifications
        </h1>
        <br />
        <div className="grid md:grid-cols-1 gap-8">
          {certificates &&
            certificates.map((document, index) => (
              <article
                className="relative md:min-w-0 rounded-lg shadow-xl bg-white p-16"
                key={index}
              >
                <h3 className="text-gray-800 text-3xl flex justify-center font-bold mb-2 hover:text-red-700">
                  {document.title}
                </h3>
                <div className="text-gray-500 flex justify-center space-x-4">
                  <span>
                    <strong className="font-bold">Issued</strong>:{" "}
                    {new Date(document.issuedDate).toLocaleDateString()}
                  </span>
                  <span>
                    <strong className="font-bold">From</strong>: {document.from}
                  </span>
                </div>
                <div className="py-5 flex justify-center">
                  <Document pdf={document.certificate.asset.url} key={index} />
                </div>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}

export default Certificates;
