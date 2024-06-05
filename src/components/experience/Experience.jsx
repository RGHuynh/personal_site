import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import './experience.css'

const Experience = () => {
  return (
    <section>
      <h5>The Skills I have</h5>
      <h2> My Experience</h2>
      <div>
        <div>
          <h3></h3>
            <div>
              <article>
                <BsFillPatchCheckFill />
                <div>
                  <h4></h4>
                  <small className="text-light">Experiened</small>
                </div>
              </article>

              <article>
                <BsFillPatchCheckFill />
                <div>
                  <h4>Css</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Javascript</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Bootstrap</h4>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>ReactJs</h4>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>
            </div>
        </div>
      </div>

      <div className="experience__backend">
        <h3>Backend Development</h3>
        <div className='experience__content'>
          <article className='experience_details'>
            <BsFillPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>Spring Boot</h4>
              <small className='text-light'>Beginner</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>MySQL</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article>
            <BsFillPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>Java</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Experience;
