import aboutPic from "./img/about-pic.png";
import experienceIcon from "./img/experience.png";
import educationIcon from "./img/education.png";
import arrowIcon from "./img/arrow.png";

function About() {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img src={aboutPic} alt="Profile Picture" className="about-pic" />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img
                src={experienceIcon}
                alt="Experience Icon"
                className="icon"
              />
              <h3>Experience</h3>
              <p>
                Web Development <br />
                Object Oriented Programming
              </p>
            </div>
            <div className="details-container">
              <img src={educationIcon} alt="Education Icon" className="icon" />
              <h3>Education</h3>
              <p>Bachalors of Computer Science Degree</p>
            </div>
          </div>
          <div className="text-container">
            <p>
              Motivated and detail-oriented student at UMBC actively pursuing a
              degree with a focus on software engineering and cybersecurity.
              Eager to apply academic knowledge in real-world settings through
              internships.
            </p>
          </div>
        </div>
      </div>
      <img
        src={arrowIcon}
        alt="Arrow Icon"
        className="icon arrow"
        onClick={() => {
          const experienceSection = document.getElementById("experience");
          if (experienceSection) {
            experienceSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
      />
    </section>
  );
}

export default About;
