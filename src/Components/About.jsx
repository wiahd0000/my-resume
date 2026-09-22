import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaTwitter
} from "react-icons/fa";

// social medi icons
import React from 'react'
import image from "../Images/profile-one.jpeg"
import Typical from 'react-typical'

function About() {
  return (
    <>
      <div className="container-box" id="about">
        <div className="about-text">
          {/* <h1 className="text-3xl uppercase mb-6 text-purple-800 text-center"> Your Welcome!</h1> */}
          <div className="scroll-text">
            <Typical
              steps={[
                "I'M Mr. Wiah, Born Again Christian 📙",
                3000,

                "I'M Mr. Wiah, Front-End Developer.💻",
                3000,

                "I'M  Mr. Wiah Graphic Designer ",
                3000,
                "I'm Mr. AI Specilist",
                2000,

                "I'M A Video Editor",
                3000,
              ]}
              loop={Infinity}
            />
          </div>
          <p  className="text-3xl text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quasi officiis iste et quibusdam nam accusamus cum nemo quisquam sit. Sint vitae nobis omnis optio fuga excepturi porro illum fugit est error, voluptas vel veniam impedit repellendus ipsum voluptatibus mollitia.</p>

          {/* social media link */}
          <div className=" flex gap-2 justify-center">
            <a href="/mr. wiah cv-2026 -septupdate.pdf" download className='cv-btn'>Download-CV</a>

            <a
              href="mailto:thomas@example.com?subject=Hello%20Thomas&body=I%20would%20like%20to%20contact%20you."
              className="email-btn"
            >
              Email Me
            </a>
          </div>
        </div>

        {/* profile image */}
        <div className="image">
          <img src={image} alt="" />

          <div className="social-icons flex gap-3 text-3xl">
  <a href="https://facebook.com/yourusername" target="_blank" rel="noreferrer">
    <FaFacebook />
  </a>

  <a href="https://instagram.com/yourusername" target="_blank" rel="noreferrer">
    <FaInstagram />
  </a>

  <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
    <FaGithub />
  </a>

  <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
    <FaLinkedin />
  </a>

  <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer">
    <FaTwitter />
  </a>
</div>
        </div>

      </div>
    </>
  )
};

export default About;