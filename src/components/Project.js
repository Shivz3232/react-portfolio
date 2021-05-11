import React, { useEffect, useState } from "react";
import sanityClient from "../client";

import loadingImage from "../loading.svg";

function Project() {
  const [projectData, setProject] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags
        }`
      )
      .then((data) => setProject(data))
      .catch(console.error);
  }, []);

  if (!projectData)
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
        <h1 className="text-white text-5xl flex text-center justify-center cursive">
          My Projects
        </h1>
        <br />
        <h2 className="text-white text-lg text-center flex justify-center cursive mb-12">
          Welcome to my projects page.
        </h2>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectData &&
            projectData.map((project, index) => (
              <article
                className="relative rounded-lg shadow-xl w-full bg-white p-8 lg:p-16"
                key={index}
              >
                <h3 className="text-gray-800 text-center text-3xl font-bold mb-2 hover:text-red-700">
                  <a
                    href={project.link}
                    alt={project.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="text-gray-500 text-xs">
                  <div className="flex justify-center">
                    <span className="m-1 p-1">
                      <strong className="font-bold">Finished on</strong>:{" "}
                      {new Date(project.date).toLocaleDateString()}
                    </span>
                    <span className="m-1 p-1">
                      <strong className="font-bold">Company</strong>:{" "}
                      {project.place}
                    </span>
                    <span className="m-1 p-1">
                      <strong className="font-bold">Type</strong>:{" "}
                      {project.projectType}
                    </span>
                  </div>
                  <div>
                    <p className="my-6 text-lg text-center text-gray-700 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <a
                      href={project.link}
                      alt={project.title}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-500 text-xl font-bold underline hover:text-red-400"
                    >
                      View The Project
                    </a>
                  </div>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}

export default Project;
