import checkmarkIcon from "./img/checkmark.png";
import arrowIcon from "./img/arrow.png";

function Experience() {
  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Web/OOP Development</h2>
            <div className="article-container">
              <article>
                <img src={checkmarkIcon} alt="Experience" className="icon" />
                <div>
                  <h3>HTML</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={checkmarkIcon} alt="Experience" className="icon" />
                <div>
                  <h3>CSS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={checkmarkIcon} alt="Experience" className="icon" />
                <div>
                  <h3>JavaScript</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={checkmarkIcon} alt="Experience" className="icon" />
                <div>
                  <h3>React</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={checkmarkIcon} alt="Experience" className="icon" />
                <div>
                  <h3>Python</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={checkmarkIcon} alt="Experience" className="icon" />
                <div>
                  <h3>C++</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={checkmarkIcon} alt="Experience" className="icon" />
                <div>
                  <h3>C</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={checkmarkIcon} alt="Experience" className="icon" />
                <div>
                  <h3>NextJS</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img src={checkmarkIcon} alt="Experience" className="icon" />
                <div>
                  <h3>NodeJS</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img src={checkmarkIcon} alt="Experience" className="icon" />
                <div>
                  <h3>TypeScript</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img src={checkmarkIcon} alt="Experience" className="icon" />
                <div>
                  <h3>AWS</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img src={checkmarkIcon} alt="Experience" className="icon" />
                <div>
                  <h3>Docker</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img src={checkmarkIcon} alt="Experience" className="icon" />
                <div>
                  <h3>Git</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <img
        src={arrowIcon}
        alt="Arrow"
        className="icon arrow"
        onClick={() => {
          const projectSection = document.getElementById("projects");
          if (projectSection) {
            projectSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
      />
    </section>
  );
}

export default Experience;
