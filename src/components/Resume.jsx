import * as React from "react";
import { useState, useEffect } from "react";
import "./styles/resume.css";
import sanityClient from "../client";
import loadingImage from "../loading.svg";
import audioclick from "../assets/click-audio.wav";

const Resume = () => {
  const [author, setAuthor] = useState(null);
  // const toggle = document.querySelector(".toggle");

  const change = async () => {
    // const audio = document.querySelector(".audio");
    const audio = new Audio(audioclick);
    const resume = document.querySelector(".Resume");
    const right_side = document.querySelector(".right_side");
    if (audio.paused) {
      audio.play();
    } else {
      audio.currentTime = 0;
    }
    audio.play();
    resume.classList.toggle("dark");
    right_side.classList.toggle("dark");
  };

  useEffect(() => {
    // toggle.addEventListener("click", change);

    sanityClient
      .fetch(
        `*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  });

  if (!author)
    return (
      <main className="bg-black min-h-screen p-12">
        <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
          <img src={loadingImage} alt="Loading icon" className="w-20 h-20" />
        </section>
      </main>
    );

  return (
    <div className="Resume">
      <div className="resume-container">
        <div className="left_side">
          <div className="profileText">
            <div className="imgBx">
              <img src={author.authorImage} alt="profile" />
            </div>
            <h2>DG Shivu</h2>
            <span>3rd year ECE</span>
            <span>CSE Junior @ PES University</span>
          </div>
          <div className="contactInfo">
            <h3 className="title">Contact Me</h3>
            <ul>
              <li>
                <span className="icon">
                  <i className="fa fa-phone" aria-hidden="true" />
                </span>
                <span className="text">7894561237</span>
              </li>
              <li>
                <span className="icon">
                  <i className="fas fa-envelope" aria-hidden="true" />
                </span>
                <span className="text">example@gmail.com</span>
              </li>
              <li>
                <span className="icon">
                  <i className="fab fa-linkedin" aria-hidden="true" />
                </span>
                <span className="text">www.linkedin.com</span>
              </li>
              <li>
                <span className="icon">
                  <i className="fa fa-map-marker" aria-hidden="true" />
                </span>
                <span className="text">Bangalore, India</span>
              </li>
            </ul>
          </div>

          <div className="contactInfo language">
            <h3 className="title">Languages</h3>
            <ul>
              <li>
                <span className="icon">
                  <i className="fab fa-python" aria-hidden="true" />
                </span>
                <span className="text">Python</span>
                <span className="percent">
                  <div style={{ width: "90%" }}></div>
                </span>
              </li>
              <li>
                <span className="icon">
                  <i className="fab fa-cuttlefish" aria-hidden="true" />
                </span>
                <span className="text">C</span>
                <span className="percent">
                  <div style={{ width: "75%" }}></div>
                </span>
              </li>
              <li>
                <span className="icon">
                  <i className="fab fa-cuttlefish" aria-hidden="true" />
                </span>
                <span className="text">C++</span>
                <span className="percent">
                  <div style={{ width: "85%" }}></div>
                </span>
              </li>
              <li>
                <span className="icon">
                  <i className="fas fa-code" aria-hidden="true" />
                </span>
                <span className="text">MATLAB</span>
                <span className="percent">
                  <div style={{ width: "80%" }}></div>
                </span>
              </li>
              <li>
                <span className="icon">
                  <i className="fab fa-java" aria-hidden="true" />
                </span>
                <span className="text">Java</span>
                <span className="percent">
                  <div style={{ width: "95%" }} />
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="right_side">
          <div className="player">
            <div className="toggle" onClick={() => change()} />
            {/* <audio
              src="../assets/mixkit-mouse-click-close-1113.wav"
              class="audio"
            ></audio> */}
          </div>
          <div className="about">
            <h2 className="title2">About Me</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,
              ea similique? Aperiam asperiores blanditiis ea id impedit,
              molestiae tenetur. Amet deserunt iure nobis, non quae quia quidem.
              Ab asperiores corporis debitis dolores esse, hic, libero nam sed
              sit suscipit voluptatem.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Asperiores deleniti doloribus eligendi est libero molestiae nam,
              nihil odio quidem quod! Asperiores autem consequuntur distinctio,
              dolorem eos impedit incidunt minus nobis porro quaerat, quod
              reprehenderit rerum similique voluptatem, voluptatum? Consequuntur
              cum dolore eveniet expedita laboriosam quam quas, repellat
              reprehenderit vero voluptates!
            </p>
          </div>
          <div className="about">
            <h2 className="title2">Experience / Volunteering</h2>
            <div className="box">
              <div className="year_company">
                <h5>2019 - Present</h5>
                <h5>Company Name</h5>
              </div>
              <div className="text">
                <h4>Web Developer</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Animi eius facere ipsa maiores nam officia, quod vitae.
                  Aliquid, dignissimos nihil?
                </p>
              </div>
            </div>
          </div>
          <div className="about skills">
            <h2 className="title2">Skills</h2>
            <div className="box">
              <h4>Html</h4>
              <div className="percent">
                <div style={{ width: "95%" }} />
              </div>
            </div>
            <div className="box">
              <h4>css</h4>
              <div className="percent">
                <div style={{ width: "95%" }} />
              </div>
            </div>
            <div className="box">
              <h4>Javascript</h4>
              <div className="percent">
                <div style={{ width: "80%" }} />
              </div>
            </div>
            <div className="box">
              <h4>Docker</h4>
              <div className="percent">
                <div style={{ width: "75%" }} />
              </div>
            </div>
            <div className="box">
              <h4>Kubernetes</h4>
              <div className="percent">
                <div style={{ width: "85%" }} />
              </div>
            </div>
            <div className="box">
              <h4>Git & Github</h4>
              <div className="percent">
                <div style={{ width: "90%" }} />
              </div>
            </div>
          </div>
          <div className="about links">
            <h2 className="title2" style={{ marginBottom: "40px" }}>
              Profile links
            </h2>
            {/* <div className="wrapper">
              <div className="button">
                <div className="icon">
                  <i className="fab fa-facebook-f" />
                </div>
                <span>Facebook</span>
              </div>
              <div className="button">
                <div className="icon">
                  <i className="fab fa-twitter" />
                </div>
                <span>Twitter</span>
              </div>
              <div className="button">
                <div className="icon">
                  <i className="fab fa-instagram" />
                </div>
                <span>Instagram</span>
              </div>
              <div className="button">
                <div className="icon">
                  <i className="fab fa-youtube" />
                </div>
                <span>YouTube</span>
              </div>
            </div> */}
          </div>
          <div className="credits">
            <p>coded by Afif</p>
            <div>
              <i className="fab fa-github"></i>
              <i className="fab fa-linkedin-in"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
