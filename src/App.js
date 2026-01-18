import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Manish Kumar Yadav</h1>
        <p className="subtitle">Full Stack Developer</p>
        
        <div className="portfolio-container">
          <div className="profile-card">
            <div className="profile-photo-placeholder">
              <img src="/portfolio.jpg" alt="Manish Kumar Yadav" className="profile-photo" onError={(e) => {e.target.style.display = 'none'; e.target.parentElement.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;width:100%;height:100%;background:#667eea;border-radius:15px;color:white;font-size:3rem;">📷</div>'}} />
            </div>
          </div>
          
          <div className="portfolio-content">
            <section className="section">
              <h2>About Me</h2>
              <p>
                Full-stack developer passionate about building responsive and user-friendly web applications. 
                Experienced with React, Node.js, and modern web technologies.
              </p>
            </section>

            <section className="section">
              <h2>Skills</h2>
              <div className="skills-list">
                <span className="skill">React</span>
                <span className="skill">JavaScript</span>
                <span className="skill">Node.js</span>
                <span className="skill">CSS</span>
                <span className="skill">HTML</span>
                <span className="skill">Git</span>
              </div>
            </section>

            <section className="section">
              <h2>Experience</h2>
              <div className="experience-list">
                <div className="experience-item">
                  <h3>Advanced Software Engineer</h3>
                  <p className="company">Honeywell · Full-time</p>
                  <p className="location">Bengaluru, Karnataka, India</p>
                </div>
                
    
                
                <div className="experience-item">
                  <h3>Senior Software Engineer</h3>
                  <p className="company">IBM India </p>
                  <p className="location">Bangalore</p>
                </div>
            
              
                
                <div className="experience-item">
                  <h3>Project Engineer</h3>
                  <p className="company">Wipro</p>
                  <p className="location">India</p>
                </div>
              </div>
            </section>

            <section className="section">
              <h2>Education</h2>
              <div className="education-list">
                <div className="education-item">
                  <h3>Bachelor of Technology (B.Tech.)</h3>
                  <p className="institution">IMS Engineering College</p>
                  <p className="degree">Electronics and Communications Engineering</p>
                </div>
                
                <div className="education-item">
                  <h3>10+2</h3>
                  <p className="institution">Kendriya Vidyalaya</p>
                </div>
              </div>
            </section>

            <section className="section">
              <h2>Contact</h2>
              <div className="contact-links">
                <a href="mailto:manishauh2018@gmail.com" className="contact-link">Email</a>
                <a href="https://wa.me/917892565742" target="_blank" rel="noopener noreferrer" className="contact-link">WhatsApp</a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
                <a href="https://www.linkedin.com/in/manish-kumar-yadav-6a520177/" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
              </div>
            </section>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
