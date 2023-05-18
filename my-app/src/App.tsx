import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import About from "./components/about/About";
import Banner from "./components/banner/Banner";
import Navbar from "./components/menuCircle/MenuCircle";
import "./scss/main.scss";
import Skills from "./components/skills/Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Projects from "./components/projects/Projects";

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000, mirror: true, offset: 20 });
  }, []);

  return (
    <main className="main">
      <ScrollToTop />
      <Navbar />
      <Banner />
      <About />
      <Skills />
      <Projects />
    </main>
  );
}

export default App;
