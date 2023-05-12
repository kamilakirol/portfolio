import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import About from "./components/about/About";
import Banner from "./components/banner/Banner";
import Navbar from "./components/menuCircle/MenuCircle";
import "./scss/main.scss";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <main className="main">
      <ScrollToTop />
      <Navbar />
      <Banner />
      <About />
      <Skills />
    </main>
  );
}

export default App;
