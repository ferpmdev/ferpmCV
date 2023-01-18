import './App.css';
import Contact from './components/contact/Contact';
import Cursor from './components/cursor/Cursor';
import Experience from './components/experience/Experience';
import Nav from './components/nav/Nav';
import Profile from './components/profile/Profile';
import Skills from './components/skills/Skills';
import { useState } from 'react';

function App() {
  const [scaling, setscaling] = useState(false);
  return (
    <div className="App">
      <Cursor scaling={scaling} />
      <main>
        <Nav />
        <Profile />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;
