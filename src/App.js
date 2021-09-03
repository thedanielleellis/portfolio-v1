import NavBar from './components/NavBar/NavBar.js'
import About from './components/About/About.js'
import Home from './components/Home/Home.js'
import Projects from './components/Projects/Projects.js'
import Contact from './components/Contact/Contact.js'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <About/>
      <Home/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
