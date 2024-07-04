import React from 'react';
import './css/About.css';
import { Link } from 'react-router-dom';
import SkillBars from './SkillBars';

function About({ name }) {
  let AboutParagraph =
    " As a ReactJS and WordPress developer, my primary focus is on problem-solving rather than getting bogged down by the choice of programming language or framework. Understanding the problem at hand and devising efficient solutions is my forte, regardless of the technologies involved. My commitment lies in delivering outstanding web services that surpass my clients' expectations.";
  return (
    <>
      <section name={name} className="about-section">
        <div className="container About">
          <div className="row ">
            <div className="col-lg-6">
              <h3>
                <span className="aboutmeText">
                  About <span style={{ color: 'var(--text)' }}>Me</span>
                </span>
              </h3>
              <div className="underlinediv"></div>
              <p className="aboutmernstackdev">
                A ReactJS & WordPress Frontend WEB DEVELOPER
              </p>
            </div>
          </div>
          <div className="row align-items-center gy-4">
            <div className="col-lg-6 col-sm-12 col-md-6">
              <div className="about-me-img">
                <img
                  className="imageabout"
                  src="./image/softwareengineer.jpg"
                  alt="software engineer"
                />
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 col-md-6">
              <div className="about-me ps-lg-5">
                <h4 className="myNameAbout">I'm Aftab Farooq</h4>
                <h6 className="aboutMernstack">
                  A <span className="aboutMern"> ReactJS & WordPress WEB DEVELOPER</span>
                </h6>
                <p>{AboutParagraph}</p>
                <div className="row about-list">
                  <div className="col-md-12">
                    <div className="media">
                      <label className="emailAbout">E-mail</label>
                      <Link
                        className="aboutinfolink"
                        to="mailto:aftabfarooq8@gmail.com"
                      >
                        <p className="emailadressabout">
                          aftabfarooq8@gmail.com
                        </p>
                      </Link>
                    </div>
                    <div className="media">
                      <label className="phoneabout">Phone</label>
                      <Link
                        className="aboutinfolink"
                        to="https://wa.me/qr/CHIIZGYCJECYD1"
                      >
                        <p className="mobileabout">+92-303-0060900</p>
                      </Link>
                    </div>
                    <div className="media">
                      <label className="freelancer">Freelance</label>
                      <p className="availableabout">Available</p>
                    </div>
                  </div>
                </div>
                <div className="btn-bar pt-3">
                  <Link
                    download
                    target="_blank"
                    className="px-btn px-btn-primary CV-btn"
                    to="./image/AFTAB-FAROOQ.pdf"
                  >
                    Download Resume
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="About-Education">
        <div className="container">
          <div className="row section-heading-02">
            <div className="col-lg-6">
              <h3 className="myResume">
                <span>
                  MY <span style={{ color: 'var(--text)' }}>RESUME</span>
                </span>
              </h3>
              <div className="underlinediv"></div>
              <p className="aboutEducationAvailable">
                I AM AVAILABLE FOR FREELANCE PROJECTS
              </p>
            </div>
          </div>
          <div className="row  gy-4">
            <div className="col-lg-6">
              <h3 className="Education">
                <i
                  style={{ color: 'var(--text)' }}
                  className="fa-solid fa-graduation-cap resume-icon"
                ></i>
                <span style={{ fontWeight: 'bold', marginRight: '10px' }}>
                  {' '}
                  Education{' '}
                </span>
              </h3>
              <ul className="timeline mb-0">
                <li>
                  <h6 className="degreeName mb-0">
                    <b> BS-Software Engineering </b>
                  </h6>
                  <small className="custom-text-white">
                    <b>University of Gujrat (Lahore Campus)</b>
                  </small>
                  <br />
                  <small className="">2015 - 2019</small>
                  <p className="custom-text-light py-3">
                    Through my Bachelor's in Software Engineering, I gained
                    expertise in programming languages, software design
                    principles, problem-solving skills, teamwork, and a deep
                    understanding of SDLC.
                  </p>
                </li>
                <li>
                  <h6 className="degreeName mb-0">
                    <b> Intermediate (FSC - Pre Engineering) </b>
                  </h6>
                  <small className="custom-text-white">
                    <b>Allama Iqbal Science College</b>
                  </small>
                  <br />
                  <small className="">2013 - 2015</small>
                  <p className=" py-3">
                    In college, I gained knowledge in math, physics, chemistry,
                    problem-solving, and critical thinking, preparing for
                    engineering challenges ahead.
                  </p>
                </li>
                <li>
                  <h6 className="degreeName mb-0">
                    <b> Matriculation </b>
                  </h6>
                  <small className="custom-text-white">
                    <b>Model Boys High School</b>
                  </small>
                  <br />
                  <small className="">2011 - 2013</small>
                  <p className="custom-text-light py-3">
                    During my high school years, I gained a strong foundation in
                    academic subjects and developed strong communication and
                    teamwork skills through various extracurricular activities.
                  </p>
                </li>
                
              </ul>
            </div>
            <div className="col-lg-6">
              <h3 className="Experience mt-5 mt-lg-0">
                <i
                  style={{ color: 'var(--text)', marginRight: '10px' }}
                  className="fa-solid fa-pencil resume-icon"
                ></i>
                <span style={{ fontWeight: 'bold' }}> Experience </span>
              </h3>
              <ul className="timeline mb-0">
                <li>
                  <h6 className="degreeName mb-0">
                    <b> ReactJS Web Developer | Wordpress Developer </b>
                  </h6>
                  <small className="custom-text-white">
                    <b>TechloHub</b>
                  </small>
                  <br />
                  <small className="">01/2024 - Present</small>
                  <p className="py-3">
                  Passionate ReactJS and WordPress Developer at TechloHub, crafting dynamic and user-centric web solutions. Continuously exploring innovative approaches to elevate web experiences with a strong focus on ReactJS and WordPress.
                  </p>
                </li><li>
                  <h6 className="degreeName mb-0">
                    <b> ReactJS Web Developer | Wordpress Developer </b>
                  </h6>
                  <small className="custom-text-white">
                    <b>Xlogic Solutions</b>
                  </small>
                  <br />
                  <small className="">09/2022 - 12/2023</small>
                  <p className="py-3">
                    At XLogic Solutions, I thrived through collaborative project
                    delivery, while my passion for development constantly drove
                    me to embrace new skills and languages.
                  </p>
                </li>
                <li>
                  <h6 className="degreeName mb-0">
                    <b> ReactJS Web Developer </b>
                  </h6>
                  <small className="custom-text-white">
                    <b> BlueHorn Tech.</b>
                  </small>
                  <br />
                  <small className="">08/2021 - 01/2022</small>
                  <p className="py-3">
                    Through my work at BlueHorn Tech, I gained extensive
                    knowledge and worked extensively in web development, API
                    Integration, and third-party plugins.
                  </p>
                </li>
                <li>
                  <h6 className="degreeName mb-0">
                    <b> AMR (QMS) + I/C APQP </b>
                  </h6>
                  <small className="custom-text-white">
                    <b>Ravi Infinity Group of Industries Pvt ltd</b>
                  </small>
                  <br />
                  <small className="">08/2020 - 07/2021</small>
                  <p className="py-3">
                    Versatile assistant manager with exceptional expertise in
                    representing and overseeing advanced product quality
                    planning. Proven leadership, organization, and
                    problem-solving abilities.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="section border-top-g">
        <div class="container TechnicalSkills">
          <div class="row section-heading-02">
            <div class="col-md-12">
              <div class="section-title">
                <h3 className="techSkill">
                  <span>
                    Technical{' '}
                    <span style={{ color: 'var(--text)' }}>Skills</span>
                  </span>
                </h3>
                <div className="underlinediv"></div>
                <p className="specializeIn">WHICH I SPECIALIZE IN</p>
              </div>
            </div>
          </div>
          <div class="row gy-4 justify-content-between">
            <div class="col-lg-6">
              <SkillBars skill="HTML" percentage={90} />
              <SkillBars skill="CSS" percentage={93} />
              <SkillBars skill="Bootstrap" percentage={86} />
              <SkillBars skill="Javascript" percentage={80} />
              <SkillBars skill="React" percentage={85} />
            </div>
            <div class="col-lg-6">
              <SkillBars skill="Wordpress" percentage={80} />
              <SkillBars skill="Node" percentage={55} />
              <SkillBars skill="MongoDB" percentage={60} />
              <SkillBars skill="API Integration" percentage={75} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
