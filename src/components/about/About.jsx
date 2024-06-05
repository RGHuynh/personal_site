import React from "react";
// import myImage from "../../assets/my_image2.JPG";
import { GiGraduateCap } from "react-icons/gi";
import { TfiWorld } from "react-icons/tfi";
import { BsBookmarkStar } from "react-icons/bs";
import "./about.css";

const About = () => {
  return (
    <section>
      <h5> Get To Know </h5>
      <h2> About Me </h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <h2>image</h2>
            {/* <img src={myImage} alt="Me" /> */}
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GiGraduateCap className="about__icon" />
              <h5>Degree</h5>
              <small>
                Bsc.(Hons) Software Engineering(UG)
                <br />
                <i>University of test.</i>
              </small>
            </article>

            <article className="about__card">
              <BsBookmarkStar className="about__icon" />
              <h5>Current PGA</h5>
              <small>3.3</small>
            </article>

            <article className="about__card">
              <TfiWorld className="about__icon" />
              <h5>Domains</h5>
              <small>
                <ui>
                  <li>Net Centric</li>
                  <li>Mobile Applications</li>
                </ui>
              </small>
            </article>


          </div>

          <p>
            Im a <b>Software Engineering Undergradute</b>
            at the University of Kelaniya. Im an enthusiastic and driven Software Engineering student seeking a challenging internship opportunity to apply
            and expand my technical skills.
            With a strong academic foundation in software engineering and hands-on experience in various programming languages,
            I am eager to contribute to innovative projects and learn from experienced professionals in the industry. I am a quick learner who is always ready to face challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
