import "./scss/main.scss";
// import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import About from "./components/about/About";
import Banner from "./components/banner/Banner";
import Skills from "./components/skills/Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import MenuCircle from "./components/menuCircle/MenuCircle";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1500, mirror: true, offset: 20 });
  }, []);

  return (
    <main className="main">
      {/* <ScrollToTop /> */}
      <MenuCircle />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
