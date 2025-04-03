import emailIcon from "./img/email.png";
import linkedInIcon from "./img/linkedin.png";

function Contact() {
  return (
    <section id="contact">
      <p className="section__text__p1">Get in touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img
            src={emailIcon}
            alt="Email Icon"
            className="icon contact-icon email-icon"
          />
          <p>
            <a href="mailto:andrewvel35@gmail.com">Andrewvel35@gmail.com</a>
          </p>
        </div>
        <div className="contact-info-container">
          <img
            src={linkedInIcon}
            alt="LinkedIn Icon"
            className="icon contact-icon"
          />
          <p>
            <a href="https://www.linkedin.com/in/andrew-velasquez-907321177/">
              Linkedin
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
