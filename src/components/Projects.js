import project1Image from "./img/project-1.png";
import project2Image from "./img/project-2.png";
import project3Image from "./img/project-3.png";
import arrowIcon from "./img/arrow.png";

function Projects() {
  const openGithub = () => {
    window.open("https://github.com/Andrew035");
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
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Project One</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={openGithub}
              >
                Github
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src={project2Image}
                alt="Project 2"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Project Two</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={openGithub}
              >
                Github
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src={project3Image}
                alt="Project 3"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">
              Project Three
            </h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={openGithub}
              >
                Github
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        src={arrowIcon}
        alt="Arrow Icon"
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
