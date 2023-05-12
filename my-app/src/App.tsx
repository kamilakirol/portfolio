import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import About from "./components/about/About";
import Banner from "./components/banner/Banner";
import Navbar from "./components/menuCircle/MenuCircle";
import "./scss/main.scss";

function App() {
  return (
    <main className="main">
      <ScrollToTop />
      <Navbar />
      <Banner />
      <About />
    </main>
  );
}

export default App;
