import './index.css';
import Contact from './components/sections/contact/Contact';
import Cursor from './components/ui/cursor/Cursor';
import Experience from './components/sections/experience/Experience';
import Nav from './components/ui/nav/Nav';
import Profile from './components/sections/profile/Profile';
import Skills from './components/sections/skills/Skills';

function App() {
  return (
    <div className="App">
      {/* <Cursor /> */}
      <main>
        <Nav />
        <Profile />
        <hr className="hr" />
        <Skills />
        <hr className="hr" />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;
