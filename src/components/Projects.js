import project1Image from "./img/project-1.png";
import project2Image from "./img/project-2.png";
import project3Image from "./img/project-3.png";
import arrowIcon from "./img/arrow.png";

function Projects() {
  const openFormValidator = () => {
    window.open("https://github.com/Andrew035/form-validator");
  };

  const openFitnessTracker = () => {
    window.open("https://github.com/Andrew035/Fitness-Tracker-App");
  };

  const openLoginApp = () => {
    window.open("https://github.com/Andrew035/login-app-with-react");
  };

  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src={project1Image}
                alt="Form Validator"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">
              Form Validator
            </h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={openFormValidator}
              >
                Github
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src={project2Image}
                alt="Fitness Tracker"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">
              Fitness Tracker
            </h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={openFitnessTracker}
              >
                Github
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src={project3Image}
                alt="Login App"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Login App</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={openLoginApp}
              >
                Github
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        src={arrowIcon}
        alt="Arrow"
        className="icon arrow"
        onClick={() => {
          const contactSection = document.getElementById("contact");
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
      />
    </section>
  );
}

export default Projects;
