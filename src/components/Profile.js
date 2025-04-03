import React, { useRef } from "react";
import CompResume from "./img/CompResume.pdf";

function Profile() {
  const openResume = () => {
    window.open(CompResume, "_blank");
  };

  return (
    <section id="profile">
      <div className="section__pic-container">
        <img
          src="./img/profile_picture.png"
          alt="Andrew Velasquez profile picture"
        />
      </div>
      <div className="section_text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Andrew Velasquez</h1>
        <p className="section__text__p2">UMBC Student and Web Developer</p>
        <div className="tn-container">
          <button className="btn btn-color-2" onClick={openResume}>
            Open CV
          </button>
          <button className="btn btn-color1" onClick="./Contact">
            Contact Info
          </button>
        </div>
        <div id="socials-contaienr">
          <img
            src="./img/linkedin.png"
            alt="My LinkedIn Profile"
            className="icon"
            onClick="location.href='https://www.linkedin.com/in/andrew-velasquez-907321177/'"
          />
          <img
            src="./img/github.png"
            alt="My GitHub Profile"
            className="icon"
            onClick="location.href='https://github.com/Andrew035'"
          />
        </div>
      </div>
    </section>
  );
}

export default Profile;
