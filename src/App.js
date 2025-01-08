import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#f5f5f4', minHeight: '100vh' }}>
      <Navbar />
      <main>
        { 
          <>
          <Hero />
         <About />
         </>
        /* <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact /> */}
      </main>
    </div>
  );
}

export default App;
