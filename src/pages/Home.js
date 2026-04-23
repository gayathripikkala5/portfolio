import React from "react";

function Home() {
  return (
    <div>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-left">
          <h1>Hello, I’m <span>Gayathri</span></h1>
          <p>
            A passionate web developer and aspiring sports presenter.
            I love building modern websites and creating engaging content.
          </p>

          <div className="buttons">
            <button className="primary">View Projects</button>
            <button className="secondary">Contact Me</button>
          </div>
        </div>

        <div className="hero-right">
          <img src="https://via.placeholder.com/350" alt="profile" />
        </div>
      </section>

      {/* ABOUT */}
      <section className="section">
        <h2>About Me</h2>
        <p>
          I am a student passionate about technology, UI/UX design, and sports media.
          I aim to combine creativity with technology to build impactful solutions.
        </p>
      </section>

      {/* SKILLS */}
      <section className="section">
        <h2>Skills</h2>
        <div className="skills">
          <span>React</span>
          <span>JavaScript</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>Content Writing</span>
        </div>
      </section>

      {/* PROJECTS PREVIEW */}
      <section className="section">
        <h2>Projects</h2>
        <div className="projects">

          <div className="card">
            <h3>Portfolio Website</h3>
            <p>Built using React and modern UI design</p>
          </div>

          <div className="card">
            <h3>Sports Blog</h3>
            <p>A platform to share sports insights and articles</p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Home;