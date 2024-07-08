import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AwardsVolunteer from './components/AwardsVolunteer';

function App() {
  return (
    <div>
      <Header />
      <About />
      <Skills />
      <Projects />
      <AwardsVolunteer/>
      <Contact />
    </div>
  );
}

export default App;
