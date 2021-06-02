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
                <span className="text">7022942665</span>
              </li>
              <li>
                <span className="icon">
                  <i className="fas fa-envelope" aria-hidden="true" />
                </span>
                <span className="text">dgshivu3232@gmail.com</span>
              </li>
              <li>
                <span className="icon">
                  <i className="fab fa-linkedin" aria-hidden="true" />
                </span>
                <span className="text"><a href="https://www.linkedin.com/in/dgshivu">LinkedIn</a></span>
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
                  <i className="devicon-mysql-plain" aria-hidden="true" />
                </span>
                <span className="text">SQL</span>
                <span className="percent">
                  <div style={{ width: "90%" }}></div>
                </span>
              </li>
              <li>
                <span className="icon">
                  <i className="devicon-javascript-plain" aria-hidden="true" />
                </span>
                <span className="text">Javascript</span>
                <span className="percent">
                  <div style={{ width: "90%" }}></div>
                </span>
              </li>
              <li>
                <span className="icon">
                  <i className="fab fa-python" aria-hidden="true" />
                </span>
                <span className="text">Python</span>
                <span className="percent">
                  <div style={{ width: "70%" }}></div>
                </span>
              </li>
              <li>
                <span className="icon">
                  <i className="devicon-c-plain" aria-hidden="true" />
                </span>
                <span className="text">C</span>
                <span className="percent">
                  <div style={{ width: "60%" }}></div>
                </span>
              </li>
              <li>
                <span className="icon">
                  <i className="fab fa-java" aria-hidden="true" />
                </span>
                <span className="text">Java</span>
                <span className="percent">
                  <div style={{ width: "60%" }}></div>
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
              Proactive and personable aspiring developer currently pursuing a Bachelor of
              Technology in Computer Science and Engineering from PES University Bangalore.
              <br />
              <br />
              My interest revolve around how large scale projects are developed and maintained.
              This curiosity has put me on the path to become a cloud certified proffessional.
              After mastering how web application are built, I'm now expanding my knowledge of application and system
              designs with the concepts of microservice
              architecture which has given me an opportunity to explore containerisation and orchestration technology.
              <br />
              <br />
              I excel at working with the team, whether it's as a member or leading the team.
              I'm eager to face new challenges in a professional field.
              I'm very capable of producing best result under pressure. I looking forward to hearing from you soon :)
            </p>
          </div>
          <div className="about">
            <h2 className="title2">Work Experience</h2>
            <div className="box">
              <div className="year_company">
                <h5>Masko</h5>
                <h4>2021 February - May</h4>
              </div>
              <div className="text">
                <h4>Backend Developer</h4>
                <p>
                  I was responsible for realizing the APIs for the Masko Social Module.
                  The task involved working with MERN stack. I was also responsible to update some APIs of other modules too.
                  My internship report can be found <a href="https://docs.google.com/document/d/1NTLzl_GDlWubojotJ0liUVPZuiMaFUyVpSn4MVMJBGc/edit?usp=sharing">here</a>.
                </p>
              </div>
            </div>
          </div>
          <div className="about skills">
            <h2 className="title2">Skills</h2>
            <div className="box">
              <h4>Systems Design</h4>
              <div className="percent">
                <div style={{ width: "100%" }} />
              </div>
            </div>
            <div className="box">
              <h4>DevOps</h4>
              <div className="percent">
                <div style={{ width: "85%" }} />
              </div>
            </div>
            <div className="box">
              <h4>Web Development</h4>
              <div className="percent">
                <div style={{ width: "95%" }} />
              </div>
            </div>
            <div className="box">
              <h4>Docker</h4>
              <div className="percent">
                <div style={{ width: "85%" }} />
              </div>
            </div>
            <div className="box">
              <h4>Kubernetes</h4>
              <div className="percent">
                <div style={{ width: "75%" }} />
              </div>
            </div>
            <div className="box">
              <h4>Git & Github</h4>
              <div className="percent">
                <div style={{ width: "90%" }} />
              </div>
            </div>
          </div>
          <div className="credits">
            <p>/resume coded by <a href="https://www.github.com/Afif1400">Afif <i className="fab fa-github"></i></a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
