import "./App.css";
import Contact from "./components/Contact/Contact";
import Intro from "./components/Intro/Intro";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <main>
        <Nav />
        <Intro />
        <Profile />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
