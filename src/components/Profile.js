import compResume from "./img/CompResume.pdf";
import githubIcon from "./img/github.png";
import linkedInIcon from "./img/linkedin.png";
import profileImage from "./img/profile_picture.png";

function Profile() {
  const openResume = () => {
    window.open(compResume, "_blank");
  };

  const handleClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/andrew-velasquez-907321177/");
  };

  const openGithub = () => {
    window.open("https://github.com/Andrew035");
  };

  return (
    <section id="profile">
      <div className="section__pic-container">
        <img
          src={profileImage}
          alt="Andrew Velasquez profile"
          className="profile-pic"
        />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Andrew Velasquez</h1>
        <p className="section__text__p2">UMBC Student and Web Developer</p>
        <div className="tn-container">
          <button className="btn btn-color-2" onClick={openResume}>
            Open CV
          </button>
          <button className="btn btn-color-1" onClick={handleClick}>
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src={linkedInIcon}
            alt="My LinkedIn Profile"
            className="icon"
            onClick={openLinkedIn}
          />
          <img
            src={githubIcon}
            alt="My GitHub Profile"
            className="icon"
            onClick={openGithub}
          />
        </div>
      </div>
    </section>
  );
}

export default Profile;
