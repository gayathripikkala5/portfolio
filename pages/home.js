import React from "react";

function Home() {
  return (
    <div className="hero">

      {/* LEFT SECTION */}
      <div className="hero-left">
        <p className="tagline">GET EVERY SINGLE SOLUTIONS.</p>

        <h1>
          I’m <span>Gayathri</span>
        </h1>

        <p className="description">
          I am passionate about web development and sports media.
          I love creating modern websites and exploring UI/UX.
        </p>

        <div className="buttons">
          <button className="primary">Learn More</button>
          <button className="secondary">Hire Me</button>
        </div>

        {/* ABOUT ME */}
        <h2>About Me</h2>
        <p>
          I am a student interested in technology, content writing, and sports presenting.
        </p>

        {/* RESEARCH INTERESTS */}
        <h2>Research Interests</h2>
        <ul>
          <li>AI in Sports Analytics</li>
          <li>Web Development</li>
          <li>UI/UX Design</li>
        </ul>

        {/* PERSONAL DETAILS */}
        <h2>Personal Details</h2>
        <p><b>Name:</b> Gayathri</p>
        <p><b>Phone:</b> 9876543210</p>
        <p><b>Email (Personal):</b> gayathri@gmail.com</p>
        <p><b>Email (College):</b> gayathri@college.edu</p>

        {/* SKILLS */}
        <h2>Skills</h2>
        <ul>
          <li>React</li>
          <li>JavaScript</li>
          <li>HTML & CSS</li>
          <li>Content Writing</li>
        </ul>
      </div>

      {/* RIGHT SECTION */}
      <div className="hero-right">
        <img
          src="https://via.placeholder.com/350"
          alt="profile"
        />
        <p className="img-label">Profile Picture</p>
      </div>

    </div>
  );
}

export default Home;