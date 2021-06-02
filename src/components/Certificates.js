import React, { useState, useEffect } from "react";
import sanityClient from "../client";

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
    <main className="bg-black min-h-screen p-6 lg:p-12">
        <section className="container mx-auto">
            <h1 className="mb-10 text-3xl lg:text-5xl text-white text-center flex justify-center cursive">
                My Certifications
            </h1>
            <div className="grid grid-cols-1 gap-8">
                {certificates && certificates.map((document, index) => (
                    <article key={index} className="relative rounded-lg shadow-xl p-4 lg:p-16 bg-gray-400">
                        <h3 className="text-black text-center font-semibold lg:text-3xl pb-2">
                            {document.title}
                        </h3>
                        <div className="flex justify-center text-xs text-center lg:text-sm py-2">
                            <span>
                                <strong>Issued</strong>{" " + new Date(document.issuedDate).toLocaleDateString()}
                            </span>
                            <span className="ml-4">
                                <strong>From</strong>{" " + document.from}
                            </span>
                        </div>
                        <div className="pt-2 flex justify-center">
                            <img 
                                src={document.certificate.asset.url}
                                alt={document.certificate.alt}
                            />
                        </div>
                    </article>
                ))}
            </div>
        </section>
    </main>
  );
}

export default Certificates;
