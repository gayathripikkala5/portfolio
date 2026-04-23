import profile from "./profile.png";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="App">

      {/* HERO */}
      <div className="hero">
  <div className="hero-content">

    <div className="hero-text">
      <h1>Gayathri Mitra</h1>
      <p>Software Developer • Data Analyst • Data Scientist</p>
    </div>

    <div className="hero-image">
      <img src={profile} alt="profile" />
    </div>

  </div>
</div>

      {/* TABS */}
      <div className="tabs">
        {["about", "projects", "skills", "details"].map((tab) => (
          <div
            key={tab}
            className={`tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </div>
        ))}
      </div>

      {/* CONTENT */}
      <div className="container">

        {/* ABOUT */}
        {activeTab === "about" && (
          <div className="content">
            <h2>About Me</h2>
            <p>
              I am a Software Engineer, Data Scientist, and Data Analyst passionate about building intelligent systems and solving real-world problems using data.
            </p>

            <div className="grid">
              <div className="card">💻 Software Engineer</div>
              <div className="card">📊 Data Analyst</div>
              <div className="card">🤖 Data Scientist</div>
            </div>
          </div>
        )}

        {/* PROJECTS */}
        {activeTab === "projects" && (
          <div className="content">
            <h2>Projects</h2>
            <div className="grid">

              <div className="card">
                 <h3>Text2Fly 🚁</h3>

                  <p>
                      Text2Fly is an intelligent drone control system that allows users to control drones using simple text commands,
                      converting them into real-time flight actions.
                    
                  </p>

                <a 
                        href="https://github.com/gayathripikkala5/Text2Fly-Drone-Control"
                        target="_blank" 
                        rel="noreferrer" 
                        className="btn"
                      >
                        View Project
                      </a>
              </div>

              <div className="card">
                <h3>Research Paper Tracking & Recommendation Tool 📄</h3>

                <p>
                  A smart system to track, organize, and recommend research papers based on user interests, helping users stay updated efficiently.

                </p>

                <a 
                  href="https://github.com/gayathripikkala5/Research-paper-tracking-and-recommendation-tool"
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn"
                >
                  View Project
                </a>
              </div>

             

            </div>
          </div>
        )}

        {/* SKILLS */}
        {activeTab === "skills" && (
          <div className="content">
            <h2>Skills</h2>
            <div className="grid">
              <div className="card">🧠 DSA</div>
              <div className="card">🐍 Python</div>
              <div className="card">📊 NumPy</div>
              <div className="card">📈 Pandas</div>
              <div className="card">📉 Matplotlib</div>
              <div className="card">🔥 PyTorch</div>
              <div className="card">🤖 Scikit-learn</div>
              <div className="card">💻 C</div>
            </div>
          </div>
        )}

        {/* CONTACT */}
        {activeTab === "details" && (
          <div className="content">
            <h2>Contact</h2>
            <div className="details">
              <p>📞 9392221323</p>
              <p>📧 gayathripikkala5@gmail.com</p>
              <p>📍 India</p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;