import React from 'react';
import NavBar from './component/NavBar';
import Profile from './component/Profile';
import About from './component/About';
import Technologies from './component/Technologies';
import Experience from './component/Experience';
import Contact from './component/Contact';

const App = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="absolute inset-0 -z-10 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="container mx-auto px-8">
        <NavBar/>
        <Profile/>
        <About/>
        <Technologies/>
        <Experience/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
