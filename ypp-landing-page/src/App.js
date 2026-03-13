import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Programs />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">Youth Passion Project</div>
        <nav>
          <a href="#about">About</a>
          <a href="#programs">Programs</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <h1>Empowering Youth Through Passion and Purpose</h1>
        <p>Discover your path, build your future, and make a difference in the world.</p>
        <button className="btn-primary">Get Started</button>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Us</h2>
        <p>The Youth Passion Project is dedicated to helping young people find their passion and turn it into meaningful careers and contributions to society.</p>
      </div>
    </section>
  );
}

function Programs() {
  return (
    <section id="programs" className="programs">
      <div className="container">
        <h2>Our Programs</h2>
        <div className="program-grid">
          <div className="program-card">
            <h3>Pathways</h3>
            <p>Guided career exploration and skill development.</p>
          </div>
          <div className="program-card">
            <h3>Global Connections</h3>
            <p>International opportunities and cultural exchange.</p>
          </div>
          <div className="program-card">
            <h3>Leadership</h3>
            <p>Develop leadership skills and community impact.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2024 Youth Passion Project. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default App;
