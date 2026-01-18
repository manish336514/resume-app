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
              <h2>Contact</h2>
              <div className="contact-links">
                <a href="mailto:manishaug2018@gmail.com" className="contact-link">Email</a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
              </div>
            </section>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
