import './index.css';
import Contact from './components/sections/contact/Contact';
import Cursor from './components/ui/cursor/Cursor';
import Experience from './components/sections/experience/Experience';
import Nav from './components/ui/nav/Nav';
import Profile from './components/sections/profile/Profile';
import Skills from './components/sections/skills/Skills';
import { useState } from 'react';

function App() {
  const [scaling, setscaling] = useState(false);
  return (
    <div className="App">
      <Cursor scaling={scaling} />
      <main>
        <Nav />
        <Profile />
        <hr className="hr" />
        <Skills />
        <hr className="hr" />
        <Experience />
        <hr className="hr" />
        <Contact />
      </main>
    </div>
  );
}

export default App;
